import React from 'react';
import DisinfectInProgress from './DisinfectInProgress';

export default {
  title: 'Robot Screen / Disinfection In Progress',
  component: DisinfectInProgress,
  parameters: {
    defaultViewport: 'tablet'
  }
};

const Template = args => <DisinfectInProgress{...args} />;

export const Default = Template.bind({});
