import React from 'react';
import { Grid } from 'antd';
import TabletScreenLayout from './TabletScreenLayout';

const WrappedComponent = ({ hideHeader, Component, tabletLayout, operator = {}, ...props }) => {
  if (tabletLayout) {
    return (
      <TabletScreenLayout>
        <Component {...props} />
      </TabletScreenLayout>
    );
  }
  return (
    <>
      <Grid container justifyContent="center" style={{ marginTop: 100 }}>
        <Grid item xs={11} md={10}>
          <Component {...props}/>
        </Grid>
      </Grid>
    </>
  );
};

export default WrappedComponent;
