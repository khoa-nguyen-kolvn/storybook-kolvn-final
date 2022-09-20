import React from 'react';
import { Button, Input, Form, Row, Col, Checkbox } from 'antd';
import DeviceLayout from 'layouts/RobotScreenLayout';

const PrepareForMapping = () => (
  <DeviceLayout>
    <div className="page prepare-for-mapping-page">
      <header>
        <h1>Prepare For Mapping</h1>
      </header>
      <main>
        <Form layout="vertical">
          <Row gutter={[20, 0]}>
            <Col span={12}>
              <Form.Item label="Room name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Barcode" tooltip="Scan barcode ">
                <Input placeholder="Optional" />
              </Form.Item>
            </Col>
            <Col span={24}>
            </Col>
            <Col span={24}>
              <h3>Checklist</h3>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Checkbox>Prepare room</Checkbox>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Checkbox>Face robot away from door</Checkbox>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Checkbox>Close entry doors</Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </main>
      <footer>
        <Button>Cancel</Button>
        <Button type="primary">Start Mapping</Button>
      </footer>
    </div>
  </DeviceLayout>
);

export default PrepareForMapping;
