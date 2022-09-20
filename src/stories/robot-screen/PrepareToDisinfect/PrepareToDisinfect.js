import React from 'react';
import { Button, Form, Checkbox, Slider} from 'antd';
import DeviceLayout from 'layouts/RobotScreenLayout';

const PrepareToDisinfect = () => {
  return (
    <DeviceLayout>
      <div className="page prepare-to-disinfect-page">
        <header>
          <h1>Prepare To Disinfect</h1>
        </header>
        <main>
          <div className="main-left">
            <div className="map">
              <img alt="Map" />
              <div className="map-name">Room 1</div>
            </div>
          </div>
          <div className="main-right">
            <h3>Safety Checklist</h3>
            <Form layout="vertical">
              <Form.Item>
                <Checkbox>Prepare Room</Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox>Close entry doors</Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox>Move robot near starting area</Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox>Plug in UV lights</Checkbox>
              </Form.Item>
            </Form>
          </div>

          <div className="main-full">
            <h3>Disinfection Intensity</h3>
            <Slider defaultValue={1} step={1} max={5} />
            <p> Estimated Disinfecting Time</p>
            <h2>05:05</h2>
          </div>
        </main>
        <footer>
          <Button>Cancel</Button>
          <Button type="primary">Continue</Button>
        </footer>
      </div>
    </DeviceLayout>
  );
};

export default PrepareToDisinfect;
