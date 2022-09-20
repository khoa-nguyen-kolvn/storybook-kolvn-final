import React from 'react';
import Mapped from './Mapped';

export default {
  title: 'Robot Screen / Mapped',
  component: Mapped,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <Mapped {...args} />;

export const Default = Template.bind({});
