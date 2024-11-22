import {
  Home,
  Calendar,
  User,
  Users,
  Settings,
  Users2,
  BarChart,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/user";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../types";
import { setContext, setSelectedItem } from "../../redux/slices/sidebar";

export default function Sidebar() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.sidebar.selectedItem
  );
  const menuItems = [
    { name: "dashboard", icon: <Home className="w-4 h-4" /> },
    { name: "users", icon: <Users2 className="w-4 h-4" /> },
    { name: "analytics", icon: <BarChart className="w-4 h-4" /> },
    // { name: "calendar", icon: <Calendar className="w-4 h-4" /> },
  ];
  const accountItems = [
    // { name: "profile", icon: <User className="w-4 h-4" /> },
    // { name: "teams", icon: <Users className="w-4 h-4" /> },
    // { name: "settings", icon: <Settings className="w-4 h-4" /> },
  ];
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispath(logout());
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full w-64 p-6 bg-light-bg dark:bg-dark-bg border-r dark:border-dark-secondary border-light-border_color rounded-tl-xl rounded-bl-xl justify-between">
      <div className="flex flex-col w-full">
        <div className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-light-texts dark:text-dark-texts">
            menu
          </h2>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 mb-2 py-2 px-3 rounded-md cursor-pointer ${
                selectedItem === item.name
                  ? "bg-primary text-white dark:text-dark-text"
                  : "hover:bg-light-secondarybg dark:hover:bg-dark-secondary"
              }`}
              onClick={() => {
                dispatch(setSelectedItem(item.name));
                console.log(item.name);
              }}
            >
              <span>{item.icon}</span>
              <span
                className={`text-light-text dark:text-dark-text ${
                  selectedItem === item.name ? "font-semibold text-white" : ""
                }`}
              >
                {item.name}
              </span>
              {selectedItem === item.name && (
                <span className="ml-auto w-1 h-5 bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </div>
        {/* <div className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-light-texts dark:text-dark-texts">
            account
          </h2>
          {accountItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 mb-3 py-2 px-3 rounded-md cursor-pointer ${
                selectedItem === item.name
                  ? "bg-primary text-white dark:text-dark-text"
                  : "hover:bg-light-secondarybg dark:hover:bg-dark-secondary"
              }`}
              onClick={() => setSelectedItem(item.name)}
            >
              <span>{item.icon}</span>
              <span className="text-light-text dark:text-dark-text">
                {item.name}
              </span>
              {selectedItem === item.name && (
                <span className="ml-auto w-1 h-5 bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </div> */}
      </div>
      <div className="flex" onClick={handleLogout}>
        <button className="bg-red-500 w-full text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}
