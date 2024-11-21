import { Ellipsis } from "lucide-react";
import { reminders } from "../../data/main-content-data";

export default function ReminderCards() {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">Reminders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="w-[18rem] border-2 border-transparent hover:border-primary duration-300 bg-light-bg dark:bg-dark-bg p-4 rounded-lg cursor-pointer border-gray-200 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-sm text-purple-700 font-medium px-2 py-1 rounded bg-purple-200"
              >
                {reminder.category}
              </span>
              <div className="flex hover:bg-gray-200 hover:dark:bg-dark-secondary rounded-full p-1">
                <Ellipsis size={24} className="text-gray-500" />
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
            <div className="flex justify-between text-sm text-light-text dark:text-dark-text">
              <span className="font-semibold">{reminder.location}</span>
              <span>{reminder.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}