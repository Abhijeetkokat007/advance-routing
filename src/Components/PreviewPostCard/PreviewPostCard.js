import React from "react";
import { Link } from "react-router-dom";
import "./PreviewPostCard.css";

function PreviewPostCard({id, Title, author, Description}){
    return(
        <div className="preview-post-card">
        <h2>{Title}</h2>
        <span>By {author}</span>
        <p>{Description}</p>
        <Link to={`/Post/ReadPost/${id}`}> more details</Link>
     </div>
    )
}

export default  PreviewPostCard