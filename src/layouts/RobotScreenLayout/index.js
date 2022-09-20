import React from 'react';
import MainMenu from './parts/Menu';
import '../layout.scss';
import './styles.scss';

const RobotScreenLayout = ({ children }) => (
  <div className="uv-layout robot-screen-layout">
    <MainMenu />
    {children}
  </div>
);

export default RobotScreenLayout;
