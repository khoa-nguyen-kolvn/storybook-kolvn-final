import React from 'react';
import { Divider } from 'antd';
import DisinfectionProgress from 'pages/safety_device/disinfecting_progress/DisinfectionProgress';
import DeviceLayout from 'layouts/TabletScreenLayout';

const StartScreen = () => {
  return (
    <DeviceLayout>
      <div className="screen start-screen">
        <header>
          <h1>START</h1>
          <Divider />
          <p>DISINFECTING</p>
        </header>
        <main>
          <DisinfectionProgress percent={0} text="Hold to Begin Disinfection" time="08:45"/>
        </main>
        <footer />
      </div>
    </DeviceLayout>
  );
};

export default StartScreen;
