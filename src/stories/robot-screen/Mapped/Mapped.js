import React from 'react';
import { Button } from 'antd';
import DeviceLayout from 'layouts/RobotScreenLayout';

const Mapped = () => (
  <DeviceLayout>
    <div className="page mapping-page">
      <header>
        <h1>Mapped "New Room"</h1>
      </header>
      <main>
        <div className="map">
          <img alt="Map" />
        </div>
        <div className="mapping-actions">
          <Button>Adjust</Button>
        </div>
      </main>
      <footer>
        <Button>Done</Button>
        <Button type="primary">Disinfect</Button>
      </footer>
    </div>
  </DeviceLayout>
);

export default Mapped;
