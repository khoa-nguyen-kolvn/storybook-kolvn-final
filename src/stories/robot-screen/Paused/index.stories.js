import React from 'react';
import Paused from './Paused';

export default {
  title: 'Safety - Phone / Paused Screen',
  component: Paused,
  parameters: {
    defaultViewport: 'Mobile'
  }
};

const Template = args => <Paused {...args} />;

export const PausedScreen = Template.bind({});

