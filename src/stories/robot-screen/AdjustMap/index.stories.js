import React from 'react';
import maps from 'stories/data/maps.json';
import AdjustMap from './AdjustMap';

export default {
  title: 'Robot Screen / Adjust Map',
  component: AdjustMap,
  parameters: {
    defaultViewport: 'Tablet'
  }
};

const Template = args => <AdjustMap {...args} />;

export const Default = Template.bind({});

Default.args = { maps };
