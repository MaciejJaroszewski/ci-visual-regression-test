import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(
    withScreenshot({
      delay: 1000,
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
  .add("with default style", () => <Button>TEST</Button>)
  .add("with primary style", () => <Button primary>TEST</Button>);
