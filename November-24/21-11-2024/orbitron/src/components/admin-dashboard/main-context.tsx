import { useState, useEffect } from "react";
import { ThemeChanger } from "../theme-changer";
import toast, { Toaster } from "react-hot-toast";
import ReminderModal from "../create-reminder-modal";
import { Flag, LocateIcon, TrashIcon } from "lucide-react"; // Import TrashIcon
import { Reminder } from "../../types/main-content";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import UserManagement from "./tabs/analysis";
import ReminderManagement from "./tabs/reminder";

export default function MainContent() {
  const selectedItem = useSelector(
    (state: RootState) => state.sidebar.selectedItem
  );

  interface Task {
    status: string;
    items: Reminder[];
  }

  const [viewMode, setViewMode] = useState<"Board" | "List">("Board");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");

    const groupedTasks = reminders.reduce((acc: any, task: any) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    }, {});

    const tasksData = Object.keys(groupedTasks).map((status) => ({
      status,
      items: groupedTasks[status],
    }));

    setTasks(tasksData);
  }, []);

  const handleDelete = (taskTitle: string) => {
    const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
    const updatedReminders = reminders.filter(
      (task: Reminder) => task.title !== taskTitle
    );
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));

    // Rebuild tasks state
    const groupedTasks = updatedReminders.reduce((acc: any, task: any) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    }, {});

    const tasksData = Object.keys(groupedTasks).map((status) => ({
      status,
      items: groupedTasks[status],
    }));

    setTasks(tasksData);
    toast.success("Task deleted successfully");
  };

  const renderBoardView = () => (
    <div className="grid grid-cols-4 gap-4">
      {tasks
        .sort((a, b) => a.status.localeCompare(b.status))
        .map((column) => (
          <div
            key={column.status}
            className="bg-white dark:bg-dark-bg rounded-lg shadow p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h2>{column.status}</h2>
              <span className="text-gray-500">{column.items.length}</span>
            </div>
            {column.items.map((task, index) => (
              <div
                key={index}
                className="bg-[#f4f5f6] border-2 border-transparent hover:border-primary duration-300 cursor-pointer dark:border-dark-secondary dark:bg-black p-4 rounded-lg mb-2 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-md
                      ${
                        task.priority === "low"
                          ? "bg-green-100 text-green-700"
                          : ""
                      }
                      ${
                        task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : ""
                      }
                      ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : ""
                      }
                    `}
                    >
                      {task.priority}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-md
                      ${
                        task.category === "personal"
                          ? "bg-purple-100 text-purple-700"
                          : ""
                      }
                      ${
                        task.category === "health"
                          ? "bg-pink-100 text-pink-700"
                          : ""
                      }
                      ${
                        task.category === "work"
                          ? "bg-violet-100 text-violet-700"
                          : ""
                      }
                    `}
                    >
                      {task.category}
                    </span>
                  </div>
                  <TrashIcon
                    className="cursor-pointer text-red-500"
                    size={16}
                    onClick={() => handleDelete(task.title)}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-light-text dark:text-dark-text">
                    {task.title}
                  </h3>
                  <h3 className="text-sm mb-1 truncate text-light-text dark:text-dark-text">
                    {task?.description}
                  </h3>
                </div>
                <div className="flex text-xs text-gray-500 items-center gap-2">
                  <Flag size={16} />
                  <span className="text-sm">{task.date}</span> ●
                  <span className="text-sm">{task.time}</span>
                </div>
                <div className="flex text-xs text-gray-500 items-center gap-2">
                  <LocateIcon size={16} />
                  <span className="text-sm">{task.location}</span>
                </div>
                <div className="flex mt-2 items-center gap-3">
                  <img
                  src={`https://avatar.iran.liara.run/public/${index}`}
                    // src="/avatars/memoji.jpg"
                    alt="Avatar"
                    className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                  />
                  <span className="text-sm">{task.assignedUser}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );

  const renderListView = () => (
    <div className="flex flex-col gap-4 w-full">
      {tasks.map((column) => (
        <div key={column.status}>
          <h2 className="font-bold text-lg text-light-text dark:text-dark-text mb-2">
            {column.status} ({column.items.length})
          </h2>
          <div className="flex flex-col gap-2">
            {column.items.map((task, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-secondary p-3 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-light-text dark:text-dark-text">
                    {task.title}
                  </h3>
                  <span className="text-xs text-gray-500">{task.category}</span>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500">{task.location}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">
                    {task.date} at {task.time}
                  </span>
                  <span className="text-xs text-gray-500">
                    {task.assignedUser}
                  </span>
                  <img
                    // src="/avatars/memoji.jpg"
                    src={`https://avatar.iran.liara.run/public/${index+1}`}
                    alt="Avatar"
                    className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSelectedContent = () => {
    switch (selectedItem) {
      case "dashboard":
        return viewMode === "Board" ? renderBoardView() : renderListView();
      case "users":
        return <UserManagement />;
      case "analytics":
        return <ReminderManagement />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full overflow-auto p-6 dark:bg-dark-secondary bg-[#f5f4f6]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <ThemeChanger />
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(true)}
            >
              + New Activity
            </button>
          </div>
        </div>
        {selectedItem === "dashboard" && (
          <div className="mb-6 border-b border-primary pb-3">
            <button
              className={`px-6 py-2 rounded-md mr-3 font-semibold ${
                viewMode === "Board" ? "bg-primary text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => setViewMode("Board")}
            >
              Board
            </button>
            <button
              className={`px-6 py-2 rounded-md font-semibold ${
                viewMode === "List" ? "bg-primary text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => setViewMode("List")}
            >
              List
            </button>
          </div>
        )}
        {renderSelectedContent()}
      </div>
      {isModalOpen && (
        <ReminderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
