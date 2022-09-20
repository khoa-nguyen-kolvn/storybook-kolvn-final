import React from 'react';
import { Divider } from 'antd';
import DeviceLayout from 'layouts/TabletScreenLayout';
import returnDevice from 'layouts/media/return-device.png';
import completed from 'layouts/media/completed-icon.png';

const Complete = ({ isFailed }) => {
  return (
    <DeviceLayout>
      <div className={!isFailed ? 'screen complete-screen' : 'screen complete-screen failed'}>
        <header>
          <img src={completed} alt="completed" />
          <p>Disinfection</p>
          <Divider />
          <h1>{!isFailed ? 'SUCCESS' : 'FAIL'}</h1>
        </header>
        <main>
          <div className="circle-icon">
            <img src={returnDevice} alt="return device" />
          </div>
        </main>
        <footer>Return safety device and follow instructions on the robot</footer>
      </div>
    </DeviceLayout>
  );
};

export default Complete;
