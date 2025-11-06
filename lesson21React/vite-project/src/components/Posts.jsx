import React, { useEffect, useState } from "react";

const Posts = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  async function fetchposts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    let data = await response.json();
    setPosts(data);
  }
  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <p>Counter: {counter} </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;