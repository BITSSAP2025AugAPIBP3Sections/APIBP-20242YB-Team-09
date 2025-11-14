// AlertsWidget.js
import React from 'react';
import { List, Avatar } from 'antd';
import {
  TruckOutlined,
  CalendarOutlined,
  AlertOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const reminders = [
  {
    id: 1,
    icon: <TruckOutlined style={{ color: '#1677ff' }} />,
    title: 'Truck #21 Due for Maintenance',
    description: 'Scheduled service at Downtown Garage tomorrow at 9:00 AM.',
  },
  {
    id: 2,
    icon: <CalendarOutlined style={{ color: '#fa8c16' }} />,
    title: 'Delivery Deadline Approaching',
    description: 'Shipment #TX-453 needs to reach Dallas by 6:00 PM.',
  },
  {
    id: 3,
    icon: <EnvironmentOutlined style={{ color: '#52c41a' }} />,
    title: 'Truck #12 Arrived at Checkpoint',
    description: 'Reached Houston logistics hub 15 minutes ago.',
  },
  {
    id: 4,
    icon: <AlertOutlined style={{ color: '#ff4d4f' }} />,
    title: 'Driver License Expiry Alert',
    description: 'License for driver Mark T. expires in 5 days.',
  },
];

const AlertsWidget = () => (
  <div
    style={{
      background: '#fff',
      borderRadius: 12,
      padding: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}
  >
    <h3 style={{ marginBottom: 16, fontWeight: 600 }}>Alerts</h3>
    <List
      itemLayout="horizontal"
      dataSource={reminders}
      renderItem={(item) => (
        <List.Item style={{ padding: '12px 0' }}>
          <List.Item.Meta
            avatar={
              <Avatar
                style={{
                  backgroundColor: '#f5f5f5',
                }}
                icon={item.icon}
              />
            }
            title={<span style={{ fontWeight: 500 }}>{item.title}</span>}
            description={
              <span style={{ color: '#8c8c8c', fontSize: 13 }}>
                {item.description}
              </span>
            }
          />
        </List.Item>
      )}
    />
  </div>
);

export default AlertsWidget;