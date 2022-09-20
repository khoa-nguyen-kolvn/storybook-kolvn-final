import React from 'react';
import { Button, Progress, Popover } from 'antd';
import DeviceLayout from 'layouts/RobotScreenLayout';

const DisinfectionReportPage = ({ isFull, isSuccess = true }) => (
  <DeviceLayout>
    <div className="page disinfect-report-page">
      <header>
        <h1>Room 1</h1>
        <p>Group: Default</p>
      </header>
      <main>
        <div className="map">
          <img alt="Map" />
        </div>
        <div className="map-info">
          {isSuccess ? (
            <h1>Fully Succeeded</h1>
          ) : (
            <div className="disinfect-fail ">
              <h1 className="fail">Disinfection Fail</h1>
              <Popover
                content="Run out of battery"
                trigger="click"
                placement="bottom"
                overlayClassName="disinfect-fail-reason-popover"
              >
                <Button>Learn more</Button>
              </Popover>
            </div>
          )}
          <div className="result">
            <div className="result-item">
              <Progress type="circle" percent={75} strokeWidth={10} strokeColor="#00b2e3" format={() => '3/4'} />
              <p>Complete Disinfection Spots</p>
            </div>
            <div className="result-item">
              <Progress type="circle" percent={100} strokeWidth={10} strokeColor="#7ed321" format={() => '100%'} />
              <p>Complete Cycle</p>
            </div>
          </div>
          <div className="actions">
            <Button>Back</Button>
            <Button>Comment</Button>
            {isFull ? <Button type="primary">View Map</Button> : <Button type="primary">View Full</Button>}
          </div>
        </div>
      </main>
    </div>
  </DeviceLayout>
);

export default DisinfectionReportPage;

