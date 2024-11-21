import { habits } from "../../data/main-content-data";
import { useNavigate } from "react-router-dom";
import { ThemeChanger } from "../theme-changer";
import ReminderCards from "./reminder-cards";

export function MainContent() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="flex-1 h-screen overflow-auto componentScroll p-6 bg-[#f5f4f7] dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-tr-xl rounded-br-xl">
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">
            My Dashboard
          </h1>
          <h1 className="text-sm text-light-text dark:text-dark-text">
            Signed in as{" "}
            {JSON.parse(localStorage.getItem("currentUser") || "{}").email}
          </h1>
        </div>
        <div className="flex items-center gap-4">
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
