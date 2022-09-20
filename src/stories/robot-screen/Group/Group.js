import React from 'react';
import { Button } from 'antd';
import DeviceLayout from 'layouts/Robot';

const GroupsList = ({ maps }) => {
};

const NoMap = () => (
  <div className="no-map">
    Groups are used to organize the rooms for disinfection.
  </div>
);

const Group = ({ maps }) => (
  <DeviceLayout>
    <div className="page groups-page">
      <header>
        <h1>Groups</h1>
      </header>
      <main>{maps ? <GroupsList maps={maps} /> : <NoMap />}</main>
      <footer>
        <Button block type="primary">
          New Map
        </Button>
      </footer>
    </div>
  </DeviceLayout>
);

export default Group;
