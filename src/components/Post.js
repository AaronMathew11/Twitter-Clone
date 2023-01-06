import { Avatar } from "@mui/material";
import React, {forwardRef} from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../CSS/Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
},ref)=> {
  return (
    <div className='post' ref={ref}>
      <div className='post__avatar'>
        <Avatar src={avatar}></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName}{" "}
              <span className='post__headerSpecial'>
                {verified && <VerifiedIcon className='post__badge' />}
                {username}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          // src="https://hips.hearstapps.com/hmg-prod/images/es-052418-elon-musk-is-on-twitter-1527189506.jpg"
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
})

export default Post;
