import React from 'react';
import DeviceLayout from 'layouts/Tablet';
import logo from 'layouts/media/logo-icon-blue.svg';

const IdleScreen = () => {
  return (
    <DeviceLayout>
      <div
        className="screen idle-screen"
      >
        <main>
          <img src={logo} alt="logo" />
        </main>
      </div>
    </DeviceLayout>
  );
};
export default IdleScreen;
