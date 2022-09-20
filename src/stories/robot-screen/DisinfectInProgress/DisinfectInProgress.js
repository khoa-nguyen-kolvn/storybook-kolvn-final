import React from 'react';
import { Divider } from 'antd';
import DeviceLayout from 'layouts/TabletScreenLayout';

const DisinfectInProgress = () => {
  return (
    <DeviceLayout>
      <div className="screen disinfection-screen robot-screen">
        <header></header>
        <main>
          <p>Disinfection</p>
          <Divider />
          <h1>In Progress</h1>
        </main>
        <footer></footer>
      </div>
    </DeviceLayout>
  );
};

export default DisinfectInProgress;
