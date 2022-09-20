import React from 'react';
import { Button, Table, Space } from 'antd';
import { RightOutlined, LeftOutlined} from '@ant-design/icons';
import DeviceLayout from 'layouts/RobotScreenLayout';

const DisinfectionHistory = ({ data }) => {
  const columns = [
    {
      title: 'Map',
    },
    {
      title: 'Start Time',
    },
    {
      title: 'Result',
    },
    {
      title: 'Upload',
      align: 'center',
    },
    {
      align: 'right',
      render: () => <Button size="large">View</Button>
    }
  ];
  return (
    <DeviceLayout>
      <div className="page disinfect-history-page">
        <header>
          <h1>Disinfect History</h1>
          <Space>
            <Button icon={<LeftOutlined />} />
            <Button icon={<RightOutlined />} />
          </Space>
        </header>
        <main>
          <Table columns={columns} dataSource={data} pagination={false} />
        </main>
        <footer>
          <Button>Reload</Button>
          <Button type="primary">Back to Home</Button>
        </footer>
      </div>
    </DeviceLayout>
  );
};

export default DisinfectionHistory;
