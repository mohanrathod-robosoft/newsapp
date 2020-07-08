import React from "react";

import "./style.scss";

type fontSizeType = "xs" | "sm" | "base";
type textColorType = "inherit" | "white" | "gray" | "black";
type textWeightType = "400" | "800";
type textElementType = "div" | "text" | "span";

export interface TextInterface {
  label?: string;
  className?: string;
  element?: textElementType;
  fontSize?: fontSizeType;
  fontWeight?: textWeightType;
  fontColor?: textColorType;
}

const Text = ({
  label = "",
  className = "",
  element = "div",
  fontSize = "base",
  fontWeight = "400",
  fontColor = "black",
}: TextInterface) => {
  let fontClass = `text--${fontSize} text--${fontColor} text--${fontWeight}`;
  let mainClass = `${fontClass} ${className}`;

  if (element === "text") {
    return <>{label}</>;
  }

  if (element === "span") {
    return <span className={mainClass}>{label}</span>;
  }

  return <div className={mainClass}>{label}</div>;
};

export default Text;
