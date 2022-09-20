import React from 'react';
import { Button, Divider } from 'antd';
import DisinfectionProgress from 'pages/safety_device/disinfecting_progress/DisinfectionProgress';
import DeviceLayout from 'layouts/TabletScreenLayout';

const PauseScreen = () => {
  return (
    <DeviceLayout>
      <div className="screen pause-screen">
        <header>
          <h1>PAUSED</h1>
          <Divider />
        </header>
        <main>
        <DisinfectionProgress percent={50} text="Press to Resume" time="05:00"/>
        </main>
        <footer>
          <Button danger block size="large">
            Hold to Abort Disinfection
          </Button>
        </footer>
      </div>
    </DeviceLayout>
  );
};

export default PauseScreen;
