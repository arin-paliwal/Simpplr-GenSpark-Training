import React, { useState, useEffect } from "react";
import { Reminder, ReminderModalProps } from "../types/main-content";
import toast, { Toaster } from "react-hot-toast";

const ReminderModal = ({ isOpen, onClose }: ReminderModalProps) => {
  const [reminder, setReminder] = useState<Reminder>({
    priority: "",
    category: "",
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    assignedUser: "",
    status: "assigned",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleAddReminder = (reminder: Object) => {
    try {
      console.log(reminder);
      const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
      localStorage.setItem(
        "reminders",
        JSON.stringify([...reminders, reminder])
      );
      onClose();
      toast.success("Reminder added successfully!");
    } catch (error) {
      console.error("Error adding reminder", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster />
      <div className="fixed flex justify-center items-center z-30 p-4 inset-0 backdrop-brightness-50 backdrop:blur-lg">
        <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-xl h-[90%] w-[70%] overflow-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              Add New Reminder
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Priority Field */}
              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={reminder.priority}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                  required
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Category Field */}
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

              {/* Title (Heading) Field */}
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

              {/* Description Field */}
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

              {/* Location Field */}
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

              {/* Date Field */}
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

              {/* Time Field */}
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

              {/* Assigned User Field */}
              <div>
                <label
                  htmlFor="assignedUser"
                  className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1"
                >
                  Assign Task to User
                </label>
                <select
                  id="assignedUser"
                  name="assignedUser"
                  value={reminder.assignedUser}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                  required
                >
                  <option value="">Select a user</option>
                  {users.map((user) => (
                    <option key={user.email} value={user.email}>
                      {user.name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
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
    </>
  );
};

export default ReminderModal;
