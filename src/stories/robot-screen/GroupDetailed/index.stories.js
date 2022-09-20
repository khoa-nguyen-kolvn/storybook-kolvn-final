import React from 'react';
import GroupDetailed from './GroupDetailed';

export default {
  title: 'Robot Screen / Group Detail',
  component: GroupDetailed,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <GroupDetailed {...args} />;

export const Default = Template.bind({});

Default.args = { };
