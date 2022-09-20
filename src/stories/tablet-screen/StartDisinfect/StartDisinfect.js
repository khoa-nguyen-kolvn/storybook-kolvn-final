import React from 'react';
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import DisinfectionProgress from 'pages/safety_device/disinfecting_screen/DisinfectionProgress';
import DeviceLayout from 'layouts/TabletScreenLayout';

const StartScreen = ({ spots }) => {
  const { t } = useTranslation();
  return (
    <DeviceLayout>
      <div className="screen start-screen">
        <header>
          <h1>START</h1>
          <Divider />
          <p>DISINFECTING</p>
        </header>
        <main>
          <DisinfectionProgress t={t} percent={0} text="Hold to Begin" time="08:45" spots={spots} />
        </main>
        <footer />
      </div>
    </DeviceLayout>
  );
};

export default StartScreen;
