import { CheckCircle, Edit, Ellipsis, Eye } from "lucide-react";
import { Reminder } from "../../types/main-content";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

const getRemindersByEmail = (email: string): Reminder[] => {
  try {
    const reminders = JSON.parse(localStorage.getItem("reminders") || "[]") as Reminder[];
    return reminders.filter((reminder) => reminder.assignedUser === email);
  } catch {
    return [];
  }
};

const updateReminderStatusByTitle = (title: string, status: string, email: string) => {
  try {
    const reminders = JSON.parse(localStorage.getItem("reminders") || "[]") as Reminder[];
    const updatedReminders = reminders.map((reminder) => {
      if (reminder.assignedUser === email && reminder.title === title) {
        return { ...reminder, status };
      }
      return reminder;
    });
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
    toast.success(`Reminder status updated to "${status}"`);
  } catch {
    toast.error("Failed to update reminder status.");
  }
};

export default function ReminderCards() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentUserData = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!currentUserData.email) return;

    const fetchedReminders = getRemindersByEmail(currentUserData.email);
    setReminders(fetchedReminders);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index: number) => {
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleStatusChange = (
    title: string,
    status: "assigned" | "in-progress" | "completed" | "review"
  ) => {
    const currentUserData = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!currentUserData.email) {
      toast.error("User is not logged in!");
      return;
    }
    updateReminderStatusByTitle(title, status, currentUserData.email);
    setReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.title === title ? { ...reminder, status } : reminder
      )
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">Reminders</h2>
      <div className="flex items-center flex-wrap gap-4">
        {reminders.map((reminder, index) => (
          <div
            key={reminder.title}
            className="w-[20rem] border-2 border-transparent hover:border-primary duration-300 bg-light-bg dark:bg-dark-bg p-4 rounded-lg cursor-pointer border-gray-200 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-md
                    ${reminder.priority === "low" ? "bg-green-100 text-green-700" : ""}
                    ${reminder.priority === "medium" ? "bg-yellow-100 text-yellow-700" : ""}
                    ${reminder.priority === "high" ? "bg-red-100 text-red-700" : ""}
                  `}
                >
                  {reminder.priority}
                </span>
                <span className="text-sm font-medium px-2 py-1 rounded-md bg-purple-200">
                  {reminder.category}
                </span>
              </div>
              <div className="relative">
                <div
                  className="flex hover:bg-gray-200 hover:dark:bg-dark-secondary rounded-full p-1"
                  onClick={() => handleMenuClick(index)}
                >
                  <Ellipsis size={24} className="text-gray-500" />
                </div>
                {activeMenuIndex === index && (
                  <div
                    ref={menuRef}
                    className="flex flex-col absolute right-0 w-[13rem] mt-2 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 space-y-1"
                  >
                    <button
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                      onClick={() => handleStatusChange(reminder.title, "in-progress")}
                    >
                      <Edit className="mr-2" size={16} />
                      Mark as In Progress
                    </button>
                    <button
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                      onClick={() => handleStatusChange(reminder.title, "completed")}
                    >
                      <CheckCircle className="mr-2" size={16} />
                      Mark as Completed
                    </button>
                    <button
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                      onClick={() => handleStatusChange(reminder.title, "review")}
                    >
                      <Eye className="mr-2" size={16} />
                      Mark as For Review
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                {reminder.title}
              </h3>
              <p className="text-light-text dark:text-dark-text text-sm font-semibold truncate">
                {reminder.description}
              </p>
            </div>
            <hr className="border-t-4 border-light-secondarybg dark:border-dark-secondary rounded-full my-3" />
            <div className="flex justify-between text-sm text-light-texts dark:text-dark-text">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{reminder.location}</span>●
                <span className="font-semibold">{reminder.date}</span>●
                <span className="font-semibold">{reminder.time}</span>
              </div>
            </div>
            <span className="text-sm mt-[-8px] text-light-texts dark:text-dark-text font-semibold">
              Current Stage: {reminder.status || "assigned"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
