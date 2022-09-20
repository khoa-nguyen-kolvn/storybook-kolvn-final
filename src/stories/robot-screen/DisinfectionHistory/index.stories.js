import React from 'react';
import DisinfectHistory from './DisinfectHistory';

export default {
  title: 'Robot Screen / Disinfect Hisotry',
  component: DisinfectHistory,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <DisinfectHistory {...args} />;

export const Default = Template.bind({});

