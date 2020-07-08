import React from "react";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import LogoImg from "../../assets/images/logo.gif";

const Logo = () => {
  return (
    <>
      <Image width={18} height={18} src={LogoImg} />
      <Text element="span" label="Hacker News" />
    </>
  );
};

export default Logo;
