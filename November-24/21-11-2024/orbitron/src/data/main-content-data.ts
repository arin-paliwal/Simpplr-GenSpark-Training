import { MockData } from "../types/main-content";

export const mockData: MockData = {
  habits: [
    {
      name: "Observing",
      icon: "/habits/observing.jpg",
      time: "07:00 - 09:00",
    },
    { name: "Cooking", icon: "/habits/cooking.jpg", time: "07:00 - 09:00" },
    { name: "Coding", icon: "/habits/coding.jpg", time: "07:00 - 09:00" },
    { name: "Singing", icon: "/habits/singing.jpg", time: "07:00 - 09:00" },
    { name: "Reading", icon: "/habits/reading.jpg", time: "07:00 - 09:00" },
  ],

  reminders: [
    { title: "Gym Session Week 3", details: "Workout details here" },
    { title: "Advanced Piano Class", details: "Class details here" },
    { title: "Product Design Webinar", details: "Webinar details here" },
  ],
  todoLists: [
    { status: "To Do", tasks: ["Task 1", "Task 2"] },
    { status: "In Progress", tasks: ["Task 3"] },
    { status: "Completed", tasks: ["Task 4", "Task 5"] },
  ],
};
