import React, { useState } from "react";
import { Menu } from "antd";

const items = [
    {
        type: "group",
        label: "MENU",
        children: [
            { label: "Dashboard", key: "nav1:1" },
            { label: "Tasks", key: "nav1:2" },
            { label: "Calendar", key: "nav1:3" },
            { label: "Analytics", key: "nav1:4" },
            { label: "Team", key: "nav1:5" }
        ],
    },
    {
        type: "group",
        label: "GENERAL",
        children: [
            { label: "Settings", key: "nav2:1" },
            { label: "Help", key: "nav2:2" },
            { label: "Logout", key: "nav2:3" },
        ],
    }
];

const SideBar = ({ navOpen, setNavOpen }) => {
    const [current, setCurrent] = useState();

    const onClick = (e) => {
        console.log("click", e);
        setCurrent(e.key);
    };

    return (
        <div
            className="sidebar-container rounded-4 p-3 pt-4"
        >
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
    );
};

export default SideBar;
