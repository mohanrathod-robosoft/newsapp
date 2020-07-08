import * as React from "react";

import { storiesOf } from "@storybook/react";

import "./style.scss";
import Text from "../Text";

storiesOf("Atoms", module)
  .add("Text", () => (
    <>
      <Text element="div" label="Hello default" />
      <Text element="div" fontSize="xs" label="Hello xs" />
      <Text element="div" fontSize="sm" label="Hello sm" />
      <Text element="div" fontColor="gray" label="Hello color gray" />
      <div style={{ backgroundColor: "#000" }}>
        <Text element="div" fontColor="white" label="Hello background black text color white" />
      </div>
      <Text element="div" fontWeight="800" label="Hello with font weight" />
      <div>
        <Text label="Hello in div" />
      </div>
    </>
  ));
