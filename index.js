// raise number recursively
function expo(x, n, cb) {
  if (n === 1) return x;
  return expo(cb(x), n - 1, cb);
}
const result = expo(5, 3, (x) => x * 5);
console.log(result);

// fetch posts data
const container = document.querySelector(".container");
function fetchPosts() {
  try {
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        posts.map((post) => {
          const card = document.createElement("div");
          card.classList.add("card");
          const h1 = document.createElement("h1");
          h1.textContent = post.title;
          const p = document.createElement("p");
          p.textContent = post.body;

          card.append(h1, p);
          container.appendChild(card);
        });
      });
  } catch (error) {
    console.log("Error: ", error);
  }
}
fetchPosts();

// deep copy
async function objDeepCopy(obj) {
  try {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(obj)) {
        const objStr = JSON.stringify(obj);
        const newObj = JSON.parse(objStr);
        resolve(newObj);
      } else {
        reject("Invalid argument. Expected an object!");
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

const objToCopy = { name: "John", age: 30, hobbies: ["reading", "painting"] };
const arr = ["sadas", "dsdasd", "Dsadsadasd", 1, "412dsa"]; // pass for test error

objDeepCopy(objToCopy).then((copiedObj) => {
  console.log(copiedObj);
  console.log(objToCopy);
});
