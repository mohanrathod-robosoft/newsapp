import React from "react";
import NavigationLink, {
  NavigationLinkIF,
} from "../../molecule/NavigationLink";

import "./footer.scss";
import Text from "../../atoms/Text";

const Footer = () => {
  const LinkArray: NavigationLinkIF[] = [
    {
      link: "/guidelines",
      label: "Guidelines",
    },
    {
      link: "/faq",
      label: "FAQ",
    },
    {
      link: "/security",
      label: "Security",
    },
    {
      link: "/bookmarklet",
      label: "Bookmarklet",
    },
  ];

  return (
    <footer className="footer-wrapper">
      {LinkArray.map((item, key) => (
        <>
          <NavigationLink
            element="span"
            fontSize="sm"
            fontColor="gray"
            key={key}
            {...item}
          />
          {key < LinkArray.length - 1 && (
            <Text label=" | " fontColor="gray" element="span" />
          )}
        </>
      ))}
    </footer>
  );
};

export default Footer;
