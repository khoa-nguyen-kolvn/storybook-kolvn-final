import React from 'react';
import { Progress } from 'antd';

const DisinfectionProgress = ({ percent, time, text, action}) => (
  <div
    className="circle-progress"
    onTouchEnd={e => {
      e.preventDefault();
      action && action();
    }}
  >
    <Progress
      strokeLinecap="butt"
      percent={100 - percent}
      type="circle"
      width={320}
      showInfo={false}
      strokeWidth={8}
      strokeColor="#00b2e3"
    />
    <div className="noselect estimated-time">{time}</div>
    <p className="noselect">{text}</p>
  </div>
);

export default DisinfectionProgress;
