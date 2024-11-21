import { useEffect, useState } from "react";
import { Habit, MockData, Reminder, TodoList } from "../../types/main-content";
import { mockData } from "../../data/main-content-data";
import { useNavigate } from "react-router-dom";
import { ThemeChanger } from "../theme-changer";
import ReminderCards from "./reminder-cards";

export function MainContent() {
  const [habits, setHabits] = useState<Habit[]>([]);
  // const [reminders, setReminders] = useState<Reminder[]>([]);
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const email = "arin@gmail.com";
  const navigate = useNavigate();

  localStorage.setItem("arin@gmail.com", JSON.stringify(mockData));

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem(email) || "null"
    ) as MockData | null;
    if (storedData) {
      setHabits(storedData.habits || []);
      // setReminders(storedData.reminders || []);
      setTodoLists(storedData.todoLists || []);
    }
  }, [email]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="flex-1 h-screen overflow-auto componentScroll p-6 bg-[#f5f4f7] dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-tr-xl rounded-br-xl">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Today Activities</h1>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded">
            + New Activity
          </button>
          <div className="flex items-center gap-2">
            <ThemeChanger />
            <button
              className="p-2 rounded bg-red-500 text-white w-[6rem]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Habits</h2>
        <div className="grid grid-cols-5 gap-4">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-3 rounded-xl flex flex-col"
            >
              <img
                src={habit.icon || "/placeholder.svg"}
                alt={habit.name}
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-110 duration-500 transform"
              />
              <p className="font-semibold mt-3">{habit.name}</p>
              <p className="text-sm text-light-texts dark:text-dark-texts">
                {habit.time}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ReminderCards />
      
    </main>
  );
}
