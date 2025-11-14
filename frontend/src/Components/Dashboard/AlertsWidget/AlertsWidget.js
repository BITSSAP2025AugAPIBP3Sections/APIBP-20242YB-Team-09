// AlertsWidget.js
import React from 'react';
import { List, Avatar, Empty } from 'antd';
import {
  TruckOutlined,
  CalendarOutlined,
  AlertOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

// SAMPLE DATA — replace with your dynamic notifications array
const reminders = [];

const AlertsWidget = () => {
  const hasData = reminders && reminders.length > 0;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        padding: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h3 style={{ marginBottom: 16, fontWeight: 600 }}>Alerts</h3>

      {hasData ? (
        <List
          itemLayout="horizontal"
          dataSource={reminders}
          renderItem={(item) => (
            <List.Item style={{ padding: '12px 0' }}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{ backgroundColor: '#f5f5f5' }}
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
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No notifications available"
        />
      )}
    </div>
  );
};

export default AlertsWidget;
