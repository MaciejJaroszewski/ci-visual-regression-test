import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(
    withScreenshot({
      delay: 100,
      viewport: {
        width: 1024,
        height: 768,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      }
    })
  )
  .add("with default style", () => <Button>Default</Button>)
  .add("with primary style", () => <Button primary>Primary</Button>);
