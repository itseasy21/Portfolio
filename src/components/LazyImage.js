import React from "react";

const LazyImage = ({ src, alt, className, style }) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      style={style}
      loading="lazy"
    />
  );
};

export default LazyImage;
