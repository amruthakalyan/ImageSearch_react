import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
      />
    );
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
