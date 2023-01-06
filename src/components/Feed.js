import "../CSS/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  getFirestore,
  doc,
  onSnapshot,
} from "firebase/firestore";
import app from "../firebase";
import FlipMove from 'react-flip-move';

function Feed() {
  const db = getFirestore(app);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts")), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
        
      })
    ;
  }, []);

  return (
    <div className='feed'>
      {/* header */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />

<FlipMove>
      {posts.map((post) => (
        <Post
        key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          timestamp={""}
        />
      ))}
</FlipMove>
    </div>
  );
}

export default Feed;
