import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .add("with default style", () => <Button>TEST</Button>)
  .add("with primary style", () => <Button primary>TEST PRIMARY</Button>);
