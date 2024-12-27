import React, { useEffect, useState } from 'react'
import { Employee } from '../types'
import axios from 'axios'
import { BASE_URL } from '../config'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ShowEmployees: React.FC = () => {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState<Employee[]>([])

  async function fetchEmployees() {
    try {
      const response = await axios.get(`${BASE_URL}`)
      setEmployees(response.data.data)
    } catch (error) {
      console.error("Error fetching employees:", error)
      toast.error("Failed to fetch employees")
    }
  }

  const deleteEmployee = async (id: number) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${id}`)
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id))
      toast.success("Employee deleted successfully")
    } catch (error) {
      console.error("Error deleting employee:", error)
      toast.error("Failed to delete employee")
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex items-center justify-between mb-6'>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Employees</h2>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300' onClick={() => navigate('/add')}>Add Employee</button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{employee.name}</h3>
              <p className="text-gray-600 mb-1"><span className="font-medium">Role:</span> {employee.role}</p>
              <p className="text-gray-600 mb-1"><span className="font-medium">Department:</span> {employee.department}</p>
              <p className="text-gray-600 mb-4"><span className="font-medium">Email:</span> {employee.email}</p>
              <div className="flex items-end gap-4 justify-end">
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/${employee.id}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  View
                </button>
                <button
                  onClick={() => navigate(`/update/${employee.id}`)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowEmployees
