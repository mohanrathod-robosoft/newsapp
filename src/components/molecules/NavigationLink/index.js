import React from "react";

import { NavLink } from "react-router-dom";

import Text from '../../atoms/text';

const NavigationLink = ({
  link, label,
  className = "",
  activeClass = "",
  textsize = "span",
  textcolor = "black",
  children,
}) => {
  return (
    <NavLink activeClassName={activeClass} className={`${className}`} to={link}>
      {children}
        <Text element="span" textsize={textsize} textcolor={textcolor} label={label} />
    </NavLink>
  );
};

export default NavigationLink;
