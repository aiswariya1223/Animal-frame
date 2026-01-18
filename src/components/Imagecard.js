import React from "react";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="image-box">
        <img src={props.img} alt={props.title} />
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default ImageCard;
