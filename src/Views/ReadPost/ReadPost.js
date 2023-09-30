import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogData from "./../../configs/blogs-data.json"; 
import Post from '../Posts/Post';
import './ReadPost.css';



function ReadPost ({ Title, author, Description,content}){
    const {id} = useParams()
    
    const [Post, setPost] = useState({})
   useEffect(()=>{
    blogData.forEach((postObj) => {
        if(postObj.id == id){
            setPost(postObj)
        }
       
    })

   }, [id])

    return (
        <>
        <h1>Read Post {id}</h1>

        <div className='card-details'>
        <h1> {Post.Title} </h1>
        <span> By {Post.author}</span>
        <p>{ Post.Description}</p>
        <p>{Post.content}</p>
        </div>
        </>
        
    )
}

export default ReadPost