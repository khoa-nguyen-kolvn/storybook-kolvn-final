import React from 'react';
import Group from './Group';

export default {
  title: 'Robot Screen / Groups',
  component: Group,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <Group {...args} />;

export const Default = Template.bind({});
Default.args = {
};

