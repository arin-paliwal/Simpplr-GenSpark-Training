import { useState, useEffect } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { setSelectedItem } from "../../redux/slices/sidebar";
import { RootState } from "../../types";


export function Sidebar() {
  const dispatch = useDispatch();
  dispatch(setSelectedItem("today"));
  const selectedItem = useSelector(
    (state: RootState) => state.sidebar.selectedItem
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const data = {
    days: ["today", "tomorrow", "next 7 days", "inbox"],
    lists: ["lists", "work", "freelance", "workout", "learning", "reading"],
    tags: ["work", "uxresearch", "inspiration", "meeting", "designteam"],
    others: ["completed", "trash", "summary"],
  };
  

  const iconClass = "h-4 w-4";

  const icons: Record<string, JSX.Element> = {
    today: <CalendarDays className={iconClass} />,
    tomorrow: <Heart className={iconClass} />,
    "next 7 days": <PieChart className={iconClass} />,
    inbox: <Home className={iconClass} />,
    lists: <List className={iconClass} />,
    work: <Briefcase className={iconClass} />,
    freelance: <Folder className={iconClass} />,
    workout: <Dumbbell className={iconClass} />,
    learning: <GraduationCap className={iconClass} />,
    reading: <Book className={iconClass} />,
    uxresearch: <Heart className={iconClass} />,
    inspiration: <Sparkles className={iconClass} />,
    meeting: <Users className={iconClass} />,
    designteam: <Users className={iconClass} />,
    completed: <CheckCircle className={iconClass} />,
    trash: <Trash2 className={iconClass} />,
    summary: <PieChart className={iconClass} />,
  };
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sidebarContent = (
    <div className="flex flex-col gap-6">
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
              onClick={() => {
                dispatch(setSelectedItem(item));
                if (isMobileMenuOpen) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              <span>{icons[item] || <Sparkles className={iconClass} />}</span>
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
    </div>
  );

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-md"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-dark-bg text-light-text dark:text-dark-text p-6 border-r dark:border-x-dark-secondary border-light-border_color dark:border-dark-border_color transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto componentScroll">
          {sidebarContent}
        </div>
      </aside>

      <aside className="hidden md:block w-64 h-screen overflow-auto componentScroll bg-white dark:bg-dark-bg text-light-text dark:text-dark-text p-6 border-r dark:border-x-dark-secondary border-light-border_color dark:border-dark-border_color rounded-tl-xl rounded-bl-xl">
        {sidebarContent}
      </aside>
    </>
  );
}
