import { useState } from "react";
import { ThemeChanger } from "../theme-changer";
import { Toaster } from "react-hot-toast";
import ReminderModal from "../create-reminder-modal";
import { tasks } from "../../data/main-content-data";
import { Flag } from "lucide-react";

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
            <h2>{column.status}</h2>

            <span className="text-gray-500">{column.items.length}</span>
          </div>
          {column.items.map((task, index) => (
            <div
              key={index}
              className="bg-white border-2 dark:border-dark-secondary dark:bg-black p-4 rounded-lg mb-2 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-md
                    ${
                      task.priority === "Low"
                        ? "bg-green-100 text-green-700"
                        : ""
                    }
                    ${
                      task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : ""
                    }
                    ${task.priority === "High" ? "bg-red-100 text-red-700" : ""}
                  `}
                >
                  {task.priority}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-md
                    ${
                      task.category === "Personal"
                        ? "bg-purple-100 text-purple-700"
                        : ""
                    }
                    ${
                      task.category === "Health"
                        ? "bg-pink-100 text-pink-700"
                        : ""
                    }
                    ${
                      task.category === "Work"
                        ? "bg-violet-100 text-violet-700"
                        : ""
                    }
                  `}
                >
                  {task.category}
                </span>
              </div>
              <div className="flex flex-col">
              <h3 className="font-bold text-light-text dark:text-dark-text">
              {task.title}
              </h3>
              <h3 className="text-sm mb-1 truncate text-light-text dark:text-dark-text">
                {task?.title}
              </h3>
              </div>
              <div className="flex justify-betweentext-xs text-gray-500 items-center gap-2">
                <Flag size={16} />
                <span className="text-sm">{task.date}</span>●
                <span className="text-sm">15:00</span>●
                <span className="text-sm">Online</span>
              </div>
              <div className="flex mt-2 items-center gap-3">
                <img
                  src="/avatars/memoji.jpg"
                  alt="Avatar"
                  className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                />
                <span className="text-sm">Arin Paliwal</span>
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
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-500">{task.date}</span>
                  <img
                    src="/avatars/memoji.jpg"
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
