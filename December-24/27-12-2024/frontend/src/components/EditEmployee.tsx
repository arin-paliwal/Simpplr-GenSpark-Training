import React, { useEffect, useState } from "react"
import { Employee } from "../types"
import axios from "axios"
import { BASE_URL } from "../config"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const EditEmployee: React.FC = () => {
  const navigate=useNavigate()
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [formData, setFormData] = useState<Employee | null>(null)

  useEffect(() => {
    const id = window.location.pathname.split("/")[2]
    fetchSpecificEmployee(id)
  }, [])

  useEffect(() => {
    if (employee) {
      setFormData(employee)
    }
  }, [employee])

  async function fetchSpecificEmployee(id: string) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`)
      setEmployee(response.data.data)
    } catch (error) {
      console.error("Error fetching employee:", error)
      toast.error("Failed to fetch employee details")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) =>
      prevData ? { ...prevData, [name]: value } : null
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) {
      console.error("Form data is not ready")
      return
    }
    await updateEmployee(formData)
  }

  async function updateEmployee(employee: Employee) {
    try {
      await axios.put(`${BASE_URL}/update/${employee.id}`, employee)
      toast.success("Employee updated successfully")
      navigate('/')
    } catch (error) {
      console.error("Error updating employee:", error)
      toast.error("Failed to update employee")
    }
  }

  if (!formData) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Employee</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee

