import React from 'react';
import { Divider } from 'antd';
import DeviceLayout from 'layouts/TabletScreenLayout';

const CompleteScreen = ({ isFailed }) => {
  return (
    <DeviceLayout>
      <div className={!isFailed ? 'screen complete-screen' : 'screen complete-screen failed'}>
        <header>
          <img alt="completed" />
          <p>Disinfection</p>
          <Divider />
          <h1>{!isFailed ? 'SUCCESS' : 'FAIL'}</h1>
        </header>
        <main>
          <div className="circle-icon">
            <img alt="return device" />
          </div>
        </main>
        <footer>Return safety device and follow instructions on the robot</footer>
      </div>
    </DeviceLayout>
  );
};

export default CompleteScreen;
