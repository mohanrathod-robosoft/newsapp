import * as React from "react";

import { storiesOf } from "@storybook/react";

import NavigationLink from "../NavigationLink";

import StoryRouter from "storybook-react-router";

import "../../../index.scss";

storiesOf("Molecule", module)
  .addDecorator(StoryRouter())
  .add("NavigationLink", () => <NavigationLink link="/ab" label="Link" />)
