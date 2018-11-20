import { configure, addDecorator } from "@storybook/react";
import { initScreenshot } from "storybook-chrome-screenshot";
import { setScreenshotOptions } from "storybook-chrome-screenshot";

// Initialize `storybook-chrome-screenshot`
addDecorator(initScreenshot());
setScreenshotOptions({
  waitFor: "fontLoading"
});

// Load stories
const req = require.context("../src", true, /\.stories\.js$/);

function fontLoading() {
  const loaded = () =>
    !!document.querySelector('link[rel="preload"][loaded="loaded"]');
  if (loaded()) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const id = setInterval(() => {
      if (!loaded()) return;
      clearInterval(id);
      resolve();
    }, 50);
  });
}

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
