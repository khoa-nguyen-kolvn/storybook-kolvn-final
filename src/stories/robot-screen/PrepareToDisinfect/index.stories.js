import React from 'react';
import PrepareToDisinfect from './PrepareToDisinfect';

export default {
  title: 'Robot Screen / Prepare To Disinfect',
  component: PrepareToDisinfect,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <PrepareToDisinfect {...args} />;

export const Default = Template.bind({});
Default.args = {};
