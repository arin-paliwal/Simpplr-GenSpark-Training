export interface Habit {
  name: string;
  icon: string;
  time: string;
}

interface Reminder {
  category: string;
  title: string;
  description: string;
  location: string;
  time: string;
  date: string;
  assignedUser: string;
  priority: string;
}

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface TodoList {
  status: string;
  tasks: string[];
}

export interface MockData {
  habits: Habit[];
  reminders: Reminder[];
  todoLists: TodoList[];
}
