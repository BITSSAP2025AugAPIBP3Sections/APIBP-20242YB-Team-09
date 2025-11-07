import React, { useState } from "react";
import { Menu } from "antd";
import {
    HomeOutlined,
    CheckSquareOutlined,
    CalendarOutlined,
    BarChartOutlined,
    TeamOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    LogoutOutlined,
    TruckOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const [current, setCurrent] = useState();
    const nav = useNavigate();

    const items = [
        {
            type: "group",
            label: "MENU",
            children: [
                { label: "Dashboard", key: "dashboard", icon: <HomeOutlined /> },
                { label: "Trucks", key: "trucks", icon: <TruckOutlined /> },
                { label: "Drivers", key: "drivers", icon: <TeamOutlined /> },
                { label: "Calendar", key: "calendar", icon: <CalendarOutlined /> },
                { label: "Analytics", key: "analytics", icon: <BarChartOutlined /> },
                { label: "Team", key: "team", icon: <TeamOutlined /> }
            ]
        },
        {
            type: "group",
            label: "GENERAL",
            children: [
                { label: "Settings", key: "settings", icon: <SettingOutlined /> },
                { label: "Help", key: "help", icon: <QuestionCircleOutlined /> },
                { label: "Logout", key: "logout", icon: <LogoutOutlined /> }
            ]
        }
    ];

    const onClick = (e) => {
        nav(`/${e.key}`);
        setCurrent(e.key);
    };

    return (
        <div className="sidebar-container rounded-4 p-3 pt-4">

            <div className="sidebar-top">
                {/* Logo */}
                <div className="d-flex gap-2 align-items-center mb-4">
                    <img src="favicon.png" alt="Logo" style={{ width: 50, height: 50 }} />
                    <div><b className="fs-8">Manage My Truck</b></div>
                </div>

                {/* Menu */}
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="vertical"
                    items={items}
                    className="custom-sidebar-menu"
                />
            </div>

            <div className="sidebar-bottom">
                {/* Contact Card */}
                <div className="sidebar-contact-card">
                    <div className="sidebar-contact-overlay"></div>

                    <div className="contact-card-content">
                        <div className="contact-title">Need Tweaks?</div>
                        <div className="contact-subtitle">
                            Reach out to us for customizations or tailored solutions.
                        </div>

                        <button className="contact-btn">Contact Us</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideBar;
