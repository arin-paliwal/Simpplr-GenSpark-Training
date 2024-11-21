export interface Habit {
  name: string;
  icon: string;
  time: string;
}

interface Reminder {
  category: string
  title: string
  description: string
  location: string
  time: string
  date: string
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
