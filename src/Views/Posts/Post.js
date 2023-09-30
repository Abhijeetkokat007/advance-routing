import React from "react";

import blogData from "./../../configs/blogs-data.json";
import "./Post.css";
import PreviewPostCard from "../../Components/PreviewPostCard/PreviewPostCard";


function Post() {
  return (
    <div>
      <h1>post</h1>
    {
        blogData.map((Post, index)=>(
           
            
         <PreviewPostCard key={index} id={Post.id} Title={Post.Title} author={Post.author} Description={Post.Description} />


        ))
    }
    </div>
  );
}

export default Post;
