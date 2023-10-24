import React, { useEffect, useState } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../firebase-config'

function Home() {
  const [postLists,setPostList] = useState([]);
  const PostsCollectionRef = collection(db,"posts");

  useEffect(()=>{
     const getPosts = async ()=>{
      const data = await getDocs(PostsCollectionRef);
      setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
     }
     getPosts();
  })
  return (
    <div className='homePage'> {postLists.map((post)=>{
      return ( 
      <div className='post'>
         <div className='postHeader'>
          <div className='title'>
            <h1>{post.title}</h1>
          </div>
          <div className='deletePost'>
            <button>&#128465;</button>
          </div>
          </div>
          
             <div className='postTextContainer'>{post.postText} </div>  
              <h3>@post.author.name</h3>
         </div>
      
      )
    })}
      
    </div>
  )
}

export default Home
