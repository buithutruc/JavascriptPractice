//Higher Order Functions

//A higher order function is a function that does at least one of the following:
//takes one or more functions as an argument (parameter)
//returns a function as the result

//forEach()

import { posts } from "./posts.js";

posts.forEach((post) => {
  console.log(post);
});

console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});

console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});

console.log(mappedPosts);

const reducedPostValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPostValue);
