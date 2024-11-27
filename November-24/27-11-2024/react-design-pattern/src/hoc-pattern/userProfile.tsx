import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Profile</h2>
      <p className="text-lg text-gray-600">This is the user's profile details.</p>
    </div>
  );
};

export default UserProfile;
