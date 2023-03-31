import React, { useState } from "react";
import { ImageStyled } from "./style";

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(true)
    target.style.opacity = 1;
  }

  return (
    <ImageStyled>
      { skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} alt={alt} {...props} />
    </ImageStyled>
  );
};
