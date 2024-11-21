export interface Habit {
  name: string;
  icon: string;
  time: string;
}

export interface Reminder {
  title: string;
  details: string;
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
