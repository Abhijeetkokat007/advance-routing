import React from "react";
import { Link } from "react-router-dom";
import "./PreviewPostCard.css";
import ReadPost from "../../Views/ReadPost/ReadPost";

function PreviewPostCard({
  id,
  image,
  Title,
  author,
  Description,
  price,
  delet,
}) {
  return (
   
    <div className="dis-flex">
      <div className="preview-post-card">
        <img className="image-card" src={image} alt="image" />
        <h2 className="title-card">{Title}</h2>
        <del> RS{delet} </del> <h3 className="pric"> RS <span className="price-card">{price}</span> </h3> <br />
        <span> {author}</span>
        <p>{Description}</p>
        <Link className="button view" to={`/Post/ReadPost/${id}`}>
          {" "}
          View Now
        </Link>
        <Link className="button buy-now" to={`/Post/ReadPost/${id}`}>
          {" "}
          Buy Now
        </Link>
      </div>
    </div>
  
  );
}

export default PreviewPostCard;
