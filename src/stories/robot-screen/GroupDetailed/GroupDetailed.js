import React from 'react';
import { Button, Divider, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DeviceLayout from 'layouts/RobotScreenLayout';


const MapList = ({ maps }) => {

  return (
    <div className="maps">
      <div className="maps-list"></div>
    </div>
  );
};

const GroupDetailed = ({ maps }) => (
  <DeviceLayout>
    <div className="page group-detail-page">
      <header>
        <Button shape="circle" icon={<ArrowLeftOutlined />} />
        <h1>Default Group</h1>
        <Button>New Map</Button>
      </header>
      <main>
        <div className="main-left">
          <div className="map">
            <img alt="Map" />
          </div>
          <div className="map-info">
            <div className="map-info-item">
              <span>Last mapped</span>
              <strong>3 days ago</strong>
            </div>
          </div>
          <Divider />
          <div className="map-actions">
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Button block>Remap</Button>
              </Col>
              <Col span={12}>
                <Button block>Adjust</Button>
              </Col>
              <Col span={12}>
                <Button block danger>
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="main-right">
          <MapList maps={maps} />
        </div>
      </main>
      <footer>
        <Button block type="primary">
          Disinfect
        </Button>
      </footer>
    </div>
  </DeviceLayout>
);

export default GroupDetailed;
