import * as React from "react";

import { storiesOf } from "@storybook/react";

import Image from "../Image";

import IMG from "../../../assets/images/logo.gif";

storiesOf("Atoms", module)
  .add("Image", () => <Image src={IMG} />);
