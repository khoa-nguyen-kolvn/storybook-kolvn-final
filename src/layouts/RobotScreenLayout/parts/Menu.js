import { useState } from 'react';
import { Drawer, Menu, Button } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  HistoryOutlined,
  BugOutlined,
  SettingOutlined,
  ReadOutlined,
  ShakeOutlined,
  AimOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const MainMenu = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const listItemDefault = [
    {
      to: '/bot/operator/add',
      primary: t('Operator'),
      secondary: t('Enroll Operator'),
      permissionRequired: 'ENROLLMENT',
      icon: <UserOutlined />
    },
    {
      to: '/history',
      primary: t('header.history'),
      secondary: t('header.disinfection_history'),
      permissionRequired: 'HISTORY',
      icon: <HistoryOutlined />
    },

    {
      to: '/settings/calib',
      primary: t('header.calibration'),
      secondary: t('header.calibrate_depthcam_position'),
      permissionRequired: 'DEV_SETTINGS',
      icon: <AimOutlined />
    },

    {
      to: '/debug',
      primary: t('header.debug_ui'),
      secondary: t('header.debug_ui'),
      permissionRequired: 'DEV_SETTINGS',
      icon: <BugOutlined />
    },

    {
      to: '/rfid_debug',
      primary: t('header.rfid_debug'),
      secondary: t('header.rfid_debug'),
      permissionRequired: 'DEV_SETTINGS',
      icon: <ShakeOutlined />
    },

    {
      to: '/settings',
      primary: t('header.settings'),
      secondary: t('header.view_device_info'),
      permissionRequired: 'SETTINGS',
      icon: <SettingOutlined />
    },
    {
      to: '/user-manual',
      primary: t('header.user_manual'),
      secondary: t('header.user_manual_info'),
      icon: <ReadOutlined />
    }
  ];

  const items = [];
  // Add Permission logic below
  listItemDefault.forEach(item => items.push({ label: item.primary, key: item.to, icon: item.icon }));

  return (
    <>
      <div className="main-menu">
        <div className="logo">
        </div>
        <div className="actions">
          <div className="action-item operator-info">
            <div>Operator</div>
          </div>
          <div className="action-item" onClick={showDrawer}>
            <MenuOutlined style={{ fontSize: '24px', color: '#fff' }} />
          </div>
        </div>
      </div>
      <Drawer title="Menu" placement="right" onClose={onClose} visible={visible} className="drawer-menu">
        <Menu items={items} />
        <Button>Log Out</Button>
      </Drawer>
    </>
  );
};
export default MainMenu;
