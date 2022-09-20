import React from 'react';
import AddOperator from './AddOperator';

export default {
  title: 'Robot Screen / Add Operator',
  component: AddOperator,
  parameters: {
    defaultViewport: 'tablet'
  }
};

const Template = args => <AddOperator {...args} />;
export const Default = Template.bind({});
