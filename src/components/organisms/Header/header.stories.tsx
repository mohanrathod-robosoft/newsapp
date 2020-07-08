import * as React from "react";

import { storiesOf } from "@storybook/react";

import StoryRouter from "storybook-react-router";

import "../../../index.scss";

import Header from "../Header";

storiesOf("Organisms", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />)