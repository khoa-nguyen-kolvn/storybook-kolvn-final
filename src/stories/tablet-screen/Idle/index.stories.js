import React from 'react';
import Idle from './Idle';

export default {
  title: 'Safety - Phone / Idle Screen',
  component: Idle,
  parameters: {
    defaultViewport: 'Mobile'
  }
};

const Template = args => <Idle {...args} />;

export const IdleScreen = Template.bind({});

