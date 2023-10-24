import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db,auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title,setTitle] =useState("");
  const [postText,setPostText] =useState("");

  const PostsCollectionRef = collection(db,"posts");
  let navigate = useNavigate();
  const createPost = async()=>{
     await addDoc(PostsCollectionRef, 
      {
        title,
        postText,
       author:{name: auth.currentUser.displayName , id:auth.currentUser.uid}});
       navigate("/");
  }

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' onChange={(event)=>{setTitle(event.target.value);
          }}
          />
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event)=>{setPostText(event.target.value);
          }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
        
    </div>
  )
}

export default CreatePost;
