// The Container/Presentational Pattern (also known as the Smart/Dumb Component pattern) is a React design pattern that separates the logic and state management (container) from the UI and rendering (presentational). This pattern improves the maintainability and reusability of your components by making them easier to test, reason about, and update.

// 1. Container Component (Manages Logic and State)
// The container component is responsible for fetching the list of users and passing them as props to the presentational component.

import React, { useEffect, useState } from "react";
import UserList from "./user-list";

interface User {
  id: number;
  name: string;
}

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data: User[] = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
          { id: 3, name: "Sam Smith" },
        ];
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  return <UserList users={users} loading={loading} error={error} />;
};

export default UserListContainer;
