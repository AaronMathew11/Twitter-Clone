import { Avatar, Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "../CSS/TweetBox.css";
import app from "../firebase";
import {
  collection,
  query,
  getFirestore,
  doc,
  onSnapshot,
} from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const db = getFirestore(app);

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Aaron Mathew",
      username: "amathew11",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src=''></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />
        <Button
          type='submit'
          onClick={sendTweet}
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
