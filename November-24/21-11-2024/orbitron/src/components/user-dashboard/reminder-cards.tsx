import { Ellipsis } from "lucide-react";
import { reminders } from "../../data/main-content-data";

export default function ReminderCards() {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Reminders</h2>
      <div className="flex gap-4">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="w-[18rem] border-2 border-transparent hover:border-primary duration-300 bg-white p-4 rounded-lg dark:bg-black cursor-pointer border-gray-200 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-sm text-purple-700 font-medium px-2 py-1 rounded bg-purple-200`}
              >
                {reminder.category}
              </span>
              <div className="flex hover:bg-gray-200 rounded-full p-1">
                <Ellipsis size={24} className="text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{reminder.title}</h3>
              <p className="text-gray-600 text-sm font-semibold truncate">
                {reminder.description}
              </p>
            </div>
            <hr className="border-t-4 rounded-full my-3" />
            <div className="flex justify-between text-sm text-gray-500">
              <span className="font-semibold">{reminder.location}</span>
              <span>{reminder.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
