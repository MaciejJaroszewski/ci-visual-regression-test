import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module).add('with default style', () => (
  <Button>TEST</Button>
));

storiesOf('Button primary', module).add('with primary style', () => (
  <Button primary>TEST PRIMARY</Button>
));

storiesOf('Button2', module).add('with default style', () => (
  <Button>TEST</Button>
));

storiesOf('Button primary2', module).add('with primary style', () => (
  <Button primary>TEST PRIMARY</Button>
));

storiesOf('Button3', module).add('with default style', () => (
  <Button>TEST</Button>
));

storiesOf('Button primary3', module).add('with primary style', () => (
  <Button primary>TEST PRIMARY</Button>
));

storiesOf('Button4', module).add('with default style', () => (
  <Button primary>TEST</Button>
));

storiesOf('Button primary4', module).add('with primary style', () => (
  <Button primary>TEST PRIMARY</Button>
));
