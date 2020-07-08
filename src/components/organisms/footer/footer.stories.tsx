import * as React from "react";

import { storiesOf } from "@storybook/react";

import StoryRouter from "storybook-react-router";

import "../../../index.scss";

import Footer from "../footer";

storiesOf("Organisms", module)
  .addDecorator(StoryRouter())
  .add("Footer", () => <Footer />)
