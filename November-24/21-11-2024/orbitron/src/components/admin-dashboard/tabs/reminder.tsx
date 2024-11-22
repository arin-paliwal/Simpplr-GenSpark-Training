"use client";

import { useState, useEffect } from "react";

interface Reminder {
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  assignedUser: string;
  status: "in-progress" | "assigned" | "completed" | "review";
}

export default function ReminderManagement() {
  const [reminders, setReminders] = useState<Reminder[]>(
    localStorage.getItem("reminders")
      ? JSON.parse(localStorage.getItem("reminders")!)
      : []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentReminder, setCurrentReminder] = useState<Reminder | null>(null);

  useEffect(() => {
    const storedReminders = JSON.parse(
      localStorage.getItem("reminders") || "[]"
    );
    setReminders(storedReminders.length ? storedReminders : reminders);
  }, []);

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.assignedUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startEditing = (reminder: Reminder) => {
    setCurrentReminder(reminder);
    setIsEditing(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Reminder
  ) => {
    if (currentReminder) {
      setCurrentReminder({
        ...currentReminder,
        [field]: e.target.value,
      });
    }
  };

  const saveReminder = () => {
    if (currentReminder) {
      const updatedReminders = reminders.map((reminder) =>
        reminder.title === currentReminder.title ? currentReminder : reminder
      );
      setReminders(updatedReminders);
      setIsEditing(false);
      setCurrentReminder(null);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setCurrentReminder(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">Reminders</h1>
      <p className="text-gray-500 mb-6">Manage your reminders and tasks here.</p>

      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">
          All Reminders{" "}
          <span className="text-gray-500 ml-2">{filteredReminders.length}</span>
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-72 mr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isEditing && currentReminder && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Edit Reminder</h2>
          <div className="space-y-4">
            {[
              "title",
              "description",
              "location",
              "date",
              "time",
              "assignedUser",
            ].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-700"
                value={(currentReminder as any)[field]}
                onChange={(e) => handleInputChange(e, field as keyof Reminder)}
              />
            ))}
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                onClick={saveReminder}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                onClick={cancelEditing}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300 dark:border-gray-700">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Priority</th>
            <th className="px-4 py-2 text-left">Assigned User</th>
            <th className="px-4 py-2 text-left">Date & Time</th>
            <th className="px-4 py-2 text-right"></th>
          </tr>
        </thead>
        <tbody>
          {filteredReminders.map((reminder, i) => (
            <tr key={i} className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-4 py-2">{reminder.title}</td>
              <td className="px-4 py-2">
                <span
                  className={`${
                    reminder.priority === "high"
                      ? "text-red-600"
                      : reminder.priority === "medium"
                      ? "text-orange-500"
                      : "text-green-600"
                  }`}
                >
                  {reminder.priority}
                </span>
              </td>
              <td className="px-4 py-2">{reminder.assignedUser}</td>
              <td className="px-4 py-2">
                {reminder.date} {reminder.time}
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                  onClick={() => startEditing(reminder)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
