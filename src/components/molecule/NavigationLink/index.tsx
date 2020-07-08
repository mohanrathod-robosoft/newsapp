import React from "react";

import { NavLink } from "react-router-dom";

// atom
import Text, { TextInterface } from "../../atoms/Text";

export interface NavigationLinkIF extends TextInterface {
  link: string;
  className?: string;
  activeClass?: string;
  children?: any;
}

const NavigationLink = ({
  link,
  label,
  className = "",
  activeClass = "",
  element = "text",
  fontSize = "base",
  fontWeight = "400",
  fontColor = "black",
  children,
}: NavigationLinkIF) => {
  return (
    <NavLink activeClassName={activeClass} className={`${className}`} to={link}>
      {children}
      {label && (
        <Text
          fontColor={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          element={element}
          label={label}
        />
      )}
    </NavLink>
  );
};

export default NavigationLink;
