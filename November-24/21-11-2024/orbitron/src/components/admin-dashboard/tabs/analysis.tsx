'use client'

import React, { useState } from 'react'

interface User {
  name: string
  email: string
  password: string
  role: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(
    localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users')!)
      : []
  )
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [newUser, setNewUser] = useState<User>({ name: '', email: '', password: '', role: 'user' })
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (editingIndex !== null) {
      setUsers(users.map((user, index) => 
        index === editingIndex ? { ...user, [name]: value } : user
      ))
    } else {
      setNewUser({ ...newUser, [name]: value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingIndex !== null) {
      setEditingIndex(null)
    } else {
      setUsers([...users, newUser])
      setNewUser({ name: '', email: '', password: '', role: 'user' })
    }
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index)
    setNewUser(users[index])
  }

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index))
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-light-bg dark:bg-dark-bg min-h-screen">
      <h1 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">User Management</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded dark:bg-dark-bg dark:text-dark-text"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-light-bg dark:bg-dark-bg shadow-md rounded-lg">
          <thead className="bg-light-secondarybg dark:bg-dark-secondary">
            <tr>
              <th className="px-4 py-2 text-left text-light-text dark:text-dark-text">Name</th>
              <th className="px-4 py-2 text-left text-light-text dark:text-dark-text">Email</th>
              <th className="px-4 py-2 text-left text-light-text dark:text-dark-text">Password</th>
              <th className="px-4 py-2 text-left text-light-text dark:text-dark-text">Role</th>
              <th className="px-4 py-2 text-left text-light-text dark:text-dark-text">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="border-b dark:border-dark-secondary">
                <td className="px-4 py-2 text-light-text dark:text-dark-text">{user.name}</td>
                <td className="px-4 py-2 text-light-text dark:text-dark-text">{user.email}</td>
                <td className="px-4 py-2 text-light-text dark:text-dark-text">{user.password}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    user.role === 'admin' 
                      ? 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button 
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 bg-light-bg dark:bg-dark-secondary p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-light-text dark:text-dark-text">
          {editingIndex !== null ? 'Edit User' : 'Add New User'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={editingIndex !== null ? users[editingIndex].name : newUser.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="p-2 border rounded dark:bg-dark-secondarybg dark:text-dark-text"
            required
          />
          <input
            type="email"
            name="email"
            value={editingIndex !== null ? users[editingIndex].email : newUser.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="p-2 border rounded dark:bg-dark-secondarybg dark:text-dark-text"
            required
          />
          <input
            type="password"
            name="password"
            value={editingIndex !== null ? users[editingIndex].password : newUser.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="p-2 border rounded dark:bg-dark-secondarybg dark:text-dark-text"
            required
          />
          <select
            name="role"
            value={editingIndex !== null ? users[editingIndex].role : newUser.role}
            onChange={handleInputChange}
            className="p-2 border rounded dark:bg-dark-secondarybg dark:text-dark-text"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          {editingIndex !== null ? 'Save Changes' : 'Add User'}
        </button>
      </form>
    </div>
  )
}
