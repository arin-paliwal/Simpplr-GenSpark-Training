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

export const reminders = [
  {
    category: "work",
    title: "Gym Session Week 3",
    description: "Day for biceps, legs, and back.",
    location: "Dona Gym",
    time: "15:00",
  },
  {
    category: "learning",
    title: "Advanced Piano Class",
    description: "Practicing melody with Mrs. Angeline.",
    location: "Mrs. Angeline house",
    time: "19:00",
  },
  {
    category: "inspiration",
    title: "Product Design Webinar",
    description: "Tokopedia Product Design Webinar.",
    location: "Online",
    time: "20:00",
  },
  {
    category: "inspiration",
    title: "Product Design Webinar",
    description: "Tokopedia Product Design Webinar.",
    location: "Online",
    time: "20:00",
  },
  {
    category: "inspiration",
    title: "Product Design Webinar",
    description: "Tokopedia Product Design Webinar.",
    location: "Online",
    time: "20:00",
  }
];