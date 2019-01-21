import React from 'react';
import { storiesOf } from '@storybook/react';
import { Profile } from './Profile';

storiesOf('Profile', module).add('first', () => (
  <Profile
    name="John Doe"
    position="Senior UI Designer"
    description="Designing websites and applications for the web."
  />
));

storiesOf('Profile', module).add('no info', () => (
  <Profile />
));

