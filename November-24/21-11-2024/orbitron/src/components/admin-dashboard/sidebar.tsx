  import { useState } from "react";
  import {
    Home,
    Bell,
    Folder,
    Calendar,
    User,
    Users,
    Settings,
  } from "lucide-react";

  export default function Sidebar() {
    const [selectedTab, setSelectedTab] = useState("Dashboard");

    const menuItems = [
      { name: "Dashboard", icon: <Home className="w-4 h-4" /> },
      { name: "Notification", icon: <Bell className="w-4 h-4" /> },
      { name: "Project", icon: <Folder className="w-4 h-4" /> },
      { name: "Calendar", icon: <Calendar className="w-4 h-4" /> },
    ];

    const accountItems = [
      { name: "Profile", icon: <User className="w-4 h-4" /> },
      { name: "Teams", icon: <Users className="w-4 h-4" /> },
      { name: "Settings", icon: <Settings className="w-4 h-4" /> },
    ];

    return (
      <div className="flex flex-col h-full w-80 p-6 bg-light-bg dark:bg-dark-bg border-r dark:border-dark-secondary border-light-border_color rounded-tl-xl rounded-bl-xl justify-between">
        <div className="flex flex-col w-full">
          <div className="mb-8">
            <h2 className="mb-3 text-sm font-semibold text-light-texts dark:text-dark-texts">
              Menu
            </h2>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 mb-3 py-2 px-3 rounded-md cursor-pointer ${
                  selectedTab === item.name
                    ? "bg-primary text-white dark:text-dark-text"
                    : "hover:bg-light-secondarybg dark:hover:bg-dark-secondary"
                }`}
                onClick={() => setSelectedTab(item.name)}
              >
                <span>{item.icon}</span>
                <span className="text-light-text dark:text-dark-text">
                  {item.name}
                </span>
                {selectedTab === item.name && (
                  <span className="ml-auto w-1 h-5 bg-white rounded-full"></span> 
                )}
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-sm font-semibold text-light-texts dark:text-dark-texts">
              Account
            </h2>
            {accountItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 mb-3 py-2 px-3 rounded-md cursor-pointer ${
                  selectedTab === item.name
                    ? "bg-primary text-white dark:text-dark-text"
                    : "hover:bg-light-secondarybg dark:hover:bg-dark-secondary"
                }`}
                onClick={() => setSelectedTab(item.name)}
              >
                <span>{item.icon}</span>
                <span className="text-light-text dark:text-dark-text">
                  {item.name}
                </span>
                {selectedTab === item.name && (
                  <span className="ml-auto w-1 h-5 bg-white rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <button className="bg-red-500 w-full text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    );
  }
