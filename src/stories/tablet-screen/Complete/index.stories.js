import React from 'react';
import Complete from './Complete';

export default {
  title: 'Safety - Phone / Complete Screen',
  component: Complete,
  parameters: {
    defaultViewport: 'Mobile'
  }
};

const Template = args => <Complete {...args} />;

export const Success = Template.bind({});

export const Fail = Template.bind({});
Fail.args = {
  isFailed: true
};

