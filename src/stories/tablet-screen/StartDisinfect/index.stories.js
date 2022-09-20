import React from 'react';
import StartDisinfect from './StartDisinfect';

export default {
  title: 'Safety - Phone / Start Disinfect',
  component: StartDisinfect,
  parameters: {
    defaultViewport: 'Mobile'
  }
};

const Template = args => <StartDisinfect {...args} />;

export const Defautl = Template.bind({});
Defautl.args = {};

