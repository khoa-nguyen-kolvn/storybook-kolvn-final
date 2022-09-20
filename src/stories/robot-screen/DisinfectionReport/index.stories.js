import React from 'react';
import DisinfectionReport from './DisinfectionReport';

export default {
  title: 'Robot Screen / Disinfection Report',
  component: DisinfectionReport,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <DisinfectionReport {...args} />;

export const Default = Template.bind({});
