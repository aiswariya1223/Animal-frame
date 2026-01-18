import React from "react";
import images from "../data/images";
import ImageCard from "./Imagecard";

function Gallery() {
  return (
    <div>
      <h2>Beast Legends</h2>

      <div className="gallery"> 
        {images.map((item) => (
          <ImageCard
            key={item.id}
            title={item.name}   
            img={item.img}      
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;