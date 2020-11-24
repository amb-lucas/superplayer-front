import React from "react";

const ImageRenderer = ({ imageData, alt }) => {
  return <img src={`data:image/png;base64,${imageData}`} alt={alt} />;
};

export default ImageRenderer;
