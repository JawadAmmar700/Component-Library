"use client";
import React from "react";
import {
  Home,
  User,
  Settings,
  Bell,
  Mail,
  LifeBuoy,
  LogOut,
} from "lucide-react";
import IDock from "../library/dock";

const DockShowCase = () => {
  return (
    <div className="">
      <IDock
        position="Top-Center"
        className="w-[300px]"
        animationDuration={200}
      >
        <IDock.Child
          icon={<Home size={24} strokeWidth={2} className="text-blue-500" />}
          tooltip="View your dashboard"
        />
        <IDock.Child
          icon={<User size={24} strokeWidth={2} className="text-green-500" />}
          tooltip="Manage your profile"
        />
        <IDock.Child
          icon={
            <Settings size={24} strokeWidth={2} className="text-gray-700" />
          }
          tooltip="Adjust app settings"
        />
        <IDock.Child
          icon={<Bell size={24} strokeWidth={2} className="text-yellow-500" />}
          tooltip="Check recent alerts"
        />
        <IDock.Child
          icon={<Mail size={24} strokeWidth={2} className="text-red-500" />}
          tooltip="View your messages"
        />
        <IDock.Child
          icon={
            <LifeBuoy size={24} strokeWidth={2} className="text-purple-500" />
          }
          tooltip="Contact support team"
        />
        <IDock.Child
          icon={<LogOut size={24} strokeWidth={2} className="text-black" />}
          tooltip="Sign out of the application"
        />
      </IDock>
    </div>
  );
};

export default DockShowCase;
