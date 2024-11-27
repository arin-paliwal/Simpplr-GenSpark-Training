// 2. Presentational Component (Focuses on UI and Rendering)
// The presentational component is purely concerned with rendering the user list. It receives data and callbacks via props.

import React from 'react';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

const UserList: React.FC<UserListProps> = ({ users, loading, error }) => {
  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
