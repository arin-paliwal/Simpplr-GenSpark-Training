const tasks = [
  {
    status: "To Do",
    items: [
      {
        priority: "Low",
        category: "Web Design",
        title: "Finance Landing Page",
        date: "31 Oct",
        comments: 9,
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
      {
        priority: "High",
        category: "Web Design",
        title: "CRM Dashboard",
        date: "1 Nov",
        comments: 8,
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
    ],
  },
  {
    status: "In Progress",
    items: [
      {
        priority: "Medium",
        category: "Mobile Apps",
        title: "Rent Car Mobile Apps",
        date: "20 Oct",
        comments: 14,
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
    ],
  },
  {
    status: "Done",
    items: [
      {
        priority: "High",
        category: "Component",
        title: "Sales Management UI Component",
        date: "18 Oct",
        comments: 19,
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
    ],
  },
  {
    status: "Review",
    items: [
      {
        priority: "Low",
        category: "Web Design",
        title: "Travel Landing Page",
        date: "4 Nov",
        comments: 5,
        avatars: [
          "/placeholder.svg?height=24&width=24",
          "/placeholder.svg?height=24&width=24",
        ],
      },
    ],
  },
];

import { useState } from "react";
import { ThemeChanger } from "../theme-changer";
import { Toaster } from "react-hot-toast";
import ReminderModal from "../create-reminder-modal";

export default function MainContent() {
  const [viewMode, setViewMode] = useState<"Board" | "List">("Board");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderBoardView = () => (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((column) => (
        <div
          key={column.status}
          className="bg-white dark:bg-dark-bg rounded-lg shadow p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-light-text dark:text-dark-text">
              {column.status}
            </h2>
            <span className="text-gray-500">{column.items.length}</span>
          </div>
          {column.items.map((task, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-dark-secondary p-3 rounded-lg mb-2"
            >
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`text-xs font-semibold ${
                    task.priority === "High"
                      ? "text-red-500"
                      : task.priority === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {task.priority}
                </span>
                <span className="text-xs text-gray-500">{task.category}</span>
              </div>
              <h3 className="font-bold mb-1 text-light-text dark:text-dark-text">
                {task.title}
              </h3>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{task.date}</span>
                <span>{task.comments} comments</span>
              </div>
              <div className="flex mt-2">
                {task.avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="Avatar"
                    className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                  />
                ))}
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
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{task.date}</span>
                  {task.avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Avatar"
                      className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Toaster />
      <div className="w-full p-6 dark:bg-dark-secondary bg-[#f5f4f6]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">
              Admin Panel
            </h1>
            <h1 className="text-sm text-light-text dark:text-dark-text">
              Signed in as{" "}
              {JSON.parse(localStorage.getItem("currentUser") || "{}").email}
            </h1>
          </div>
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
        <div className="flex justify-start space-x-3 mb-6 border-b border-primary pb-3">
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
              viewMode === "Board"
                ? "border-2 border-primary bg-primary text-white"
                : "border-2 border-transparent text-light-text dark:text-dark-text hover:border-primary hover:bg-light-secondarybg hover:dark:bg-dark-secondary"
            }`}
            onClick={() => setViewMode("Board")}
          >
            Board
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
              viewMode === "List"
                ? "border-2 border-primary bg-primary text-white"
                : "border-2 border-transparent text-light-text dark:text-dark-text hover:border-primary hover:bg-light-secondarybg hover:dark:bg-dark-secondary"
            }`} 
            onClick={() => setViewMode("List")}
          >
            List
          </button>
        </div>

        <div className="flex w-full">
          {viewMode === "Board" ? renderBoardView() : renderListView()}
        </div>
      </div>
      <div className="flex">
      <ReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      </div>
    </>
  );
}
