import { useSelector, useDispatch } from "react-redux";
import {
  Home,
  List,
  CalendarDays,
  Folder,
  Dumbbell,
  GraduationCap,
  Book,
  Sparkles,
  Users,
  Briefcase,
  CheckCircle,
  Trash2,
  PieChart,
  Heart,
} from "lucide-react";
import { setSelectedItem } from "../../redux/sidebar-slice";
import store from "../../redux/store";

type RootState = ReturnType<typeof store.getState>;

export function Sidebar() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.sidebar.selectedItem
  );

  const data = {
    days: ["Today", "Tomorrow", "Next 7 days", "Inbox"],
    lists: ["Lists", "Work", "Freelance", "Workout", "Learning", "Reading"],
    tags: ["work", "uxresearch", "inspiration", "meeting", "designteam"],
    others: ["Completed", "Trash", "Summary"],
  };

  const iconClass = "h-4 w-4";

  const icons: Record<string, JSX.Element> = {
    Today: <CalendarDays className={iconClass} />,
    Tomorrow: <Heart className={iconClass} />,
    "Next 7 days": <PieChart className={iconClass} />,
    Inbox: <Home className={iconClass} />,
    Lists: <List className={iconClass} />,
    Work: <Briefcase className={iconClass} />,
    Freelance: <Folder className={iconClass} />,
    Workout: <Dumbbell className={iconClass} />,
    Learning: <GraduationCap className={iconClass} />,
    Reading: <Book className={iconClass} />,
    work: <Briefcase className={iconClass} />,
    uxresearch: <Heart className={iconClass} />,
    inspiration: <Sparkles className={iconClass} />,
    meeting: <Users className={iconClass} />,
    designteam: <Users className={iconClass} />,
    Completed: <CheckCircle className={iconClass} />,
    Trash: <Trash2 className={iconClass} />,
    Summary: <PieChart className={iconClass} />,
  };

  return (
    <aside className="w-64 h-screen overflow-auto componentScroll bg-white dark:bg-dark-bg text-light-text dark:text-dark-text p-6 border-r dark:border-x-dark-secondary border-light-border_color dark:border-dark-border_color rounded-tl-xl rounded-bl-xl flex flex-col gap-6">
      {Object.entries(data).map(([category, items]) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="font-semibold text-light-texts dark:text-dark-texts">
            {category}
          </h3>
          {items.map((item) => (
            <div
              key={item}
              className={`flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200 cursor-pointer ${
                selectedItem === item
                  ? "bg-primary text-white dark:text-dark-text"
                  : "hover:bg-light-secondarybg dark:hover:bg-dark-secondary"
              }`}
              onClick={() => dispatch(setSelectedItem(item))}
            >
              <span
                
              >
                {icons[item] || <Sparkles className={iconClass} />}
              </span>
              <span
                className={`font-medium ${
                  selectedItem === item
                    ? "text-white dark:text-dark-text"
                    : "text-light-texts dark:text-dark-texts"
                }`}
              >
                {item}
              </span>
              {selectedItem === item && (
                <span className="ml-auto w-1 h-5 bg-white rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
