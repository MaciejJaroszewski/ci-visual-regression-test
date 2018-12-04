import { configure, addDecorator, getStorybook } from "@storybook/react";
import 'loki/configure-react';

// Load stories
const req = require.context("../src", true, /\.stories\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
