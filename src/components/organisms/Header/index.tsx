import React from "react";

import NavigationLink, {
  NavigationLinkIF,
} from "../../molecule/NavigationLink";
import Logo from "../../molecule/Logo";

import "./header.scss";

const Header = () => {
  const LinkArray: NavigationLinkIF[] = [
    {
      link: "/newest",
      label: "new",
    },
    {
      link: "/ask",
      label: "ask",
    },
    {
      link: "/show",
      label: "show",
    },
    {
      link: "/jobs",
      label: "jobs",
    },
  ];

  return (
    <table className="header-wrapper">
      <tbody>
        <tr>
          <td className="header-wrapper__logo">
            <NavigationLink link="/">
              <Logo />
            </NavigationLink>
          </td>
          {LinkArray.map((item, key) => (
            <td key={key}>
              <NavigationLink activeClass="header-wrapper__active" {...item} />{" "}
              {key < LinkArray.length - 1 && "|"}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
