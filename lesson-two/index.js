// FETCH METHOD
// fetch("https://jsonplaceholder.typicode.com/posts");
// response
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     const rerumPosts = data.filter((post) => {
//       return post.body.includes("rerum");
//     });
//     console.log(rerumPosts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ASYNC AWAIT METHOD
// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// }

// console.log(getPosts());

// async function init() {
//   async function getPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
//   }

//   console.log(await getPosts());
// }

// init();
