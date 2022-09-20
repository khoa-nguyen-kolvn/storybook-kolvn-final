import React from 'react';
import { Button, Divider } from 'antd';
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
          <p>Resume disinfection on safety device</p>
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
