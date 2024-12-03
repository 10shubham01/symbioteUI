import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import Tab from "./tab";

const HomeContent = () => <div>Home Content</div>;
const ProfileContent = () => <div>Profile Content</div>;
const SettingsContent = () => <div>Settings Content</div>;

const tabs = [
  { name: "home", label: "Home", icon: <FaHome />, component: <HomeContent /> },
  {
    name: "profile",
    label: "Profile",
    icon: <FaUser />,
    component: <ProfileContent />,
  },
  {
    name: "settings",
    label: "Settings",
    icon: <FaCog />,
    component: <SettingsContent />,
  },
];

const Example = () => {
  return <Tab tabs={tabs} />;
};

export default Example;
