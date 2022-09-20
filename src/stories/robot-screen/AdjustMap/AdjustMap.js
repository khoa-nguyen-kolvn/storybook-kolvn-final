import React from 'react';
import { Button, Input, Form } from 'antd';
import DeviceLayout from 'layouts/RobotScreenLayout';

const AdjustMap = () => (
  <DeviceLayout>
    <div className="page adjust-map-page">
      <header>
        <h1>ROOM 1</h1>
        <Button>New Map</Button>
      </header>
      <main>
        <div className="main-left">
          <div className="map">
            <img alt="Map" />
          </div>
          <div className="map-info">
            <h3>Room 3</h3>
            <Form layout="vertical">
              <Form.Item label="Barcode" tooltip="Scan barcode">
                <Input placeholder="Optional" />
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
      <footer>
        <Button>Cancel</Button>
        <Button type="primary">Save</Button>
      </footer>
    </div>
  </DeviceLayout>
  
);

export default AdjustMap;
