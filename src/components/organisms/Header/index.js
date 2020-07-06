import React from "react";

import NavigationLink from "../../molecules/NavigationLink";

import "./style.css";

const Header = () => {
  const LinkArray = [
    {
      link: "/comments",
      label: " comments ",
    },
    {
      link: "/ask",
      label: " ask ",
    },
    {
      link: "/jobs",
      label: " jobs ",
    },
    {
      link: "/submit",
      label: " submit ",
    },
  ];

  return (
    <table className="header-wrapper">
      <tbody>
        <tr>
          <td className="header-wrapper__logo">
            <NavigationLink link="/">
              Logo
            </NavigationLink>
          </td>
          {LinkArray.map((item, key) => (
            <td key={key}>
              <NavigationLink activeClass="header-wrapper__active" {...item} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
