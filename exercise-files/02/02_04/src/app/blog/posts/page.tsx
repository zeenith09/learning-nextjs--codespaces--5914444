import React from "react";
import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page() {
  return (
    <>
      <h1>Blog Page</h1>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </li>
        ))}
      </ul> */}

      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
}
