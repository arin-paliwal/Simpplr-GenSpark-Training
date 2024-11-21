import React, { useState, useEffect } from "react";
import { Reminder, ReminderModalProps } from "../types/main-content";

const ReminderModal = ({ isOpen, onClose }: ReminderModalProps) => {
  const [reminder, setReminder] = useState<Reminder>({
    category: "",
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    assignedUsers: [],
  });
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const filteredUsers = storedUsers.filter(
      (user: { role: string }) => user.role === "user"
    );
    setUsers(filteredUsers);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setReminder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectUsers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUsers = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setReminder((prev) => ({ ...prev, assignedUsers: selectedUsers })); // Update assigned users
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  const handleAddReminder = (reminder: Object) => {
    try {
      console.log(reminder);
      const currentUserData = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
      if (!Array.isArray(currentUserData.reminders)) {
        currentUserData.reminders = [];
      }
      currentUserData.reminders.push(reminder);
      localStorage.setItem("currentUser", JSON.stringify(currentUserData));
    } catch (error) {
      console.error("Failed to update reminders:", error);
    }
  };

  return (
    <div className="fixed flex justify-center items-center z-30 p-4 inset-0 backdrop-brightness-50 backdrop:blur-lg">
      <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-xl h-[90%] w-[70%] overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
            Add New Reminder
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={reminder.category}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              >
                <option value="">Select a category</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={reminder.title}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={reminder.description}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                rows={3}
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={reminder.location}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={reminder.date}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={reminder.time}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>

            <div>
              <label
                htmlFor="assignedUsers"
                className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
              >
                Assign Task to Users
              </label>
              <select
                id="assignedUsers"
                name="assignedUsers"
                value={reminder.assignedUsers}
                onChange={handleSelectUsers}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
              >
                {users.map((user) => (
                  <option key={user.email} value={user.email}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md text-light-texts dark:text-dark-texts bg-light-secondarybg dark:bg-dark-secondary hover:bg-opacity-80 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md text-white bg-primary dark:bg-dark-primary hover:bg-opacity-80 transition-colors"
                onClick={() => handleAddReminder(reminder)}
              >
                Add Reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;
