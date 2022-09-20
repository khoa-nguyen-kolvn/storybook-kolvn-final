import React from 'react';
import PrepareForMapping from './PrepareForMapping';

export default {
  title: 'Robot Screen / Prepare For Mapping',
  component: PrepareForMapping,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <PrepareForMapping {...args} />;

export const Default = Template.bind({});
