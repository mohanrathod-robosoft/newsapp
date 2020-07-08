import React from "react";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Image = ({ src, alt = "", className = "", ...rest }: Props) => {
  return <img src={src} alt={alt} className={className} {...rest} />;
};

export default Image;
