import React, { useEffect, useState } from "react"
import { Employee } from "../types"
import axios from "axios"
import { BASE_URL } from "../config"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const ShowSpecificEmployee: React.FC = () => {
  const navigate = useNavigate()
  const [employee, setEmployee] = useState<Employee | null>(null)

  useEffect(() => {
    const id = window.location.pathname.split("/")[1]
    fetchSpecificEmployee(id)
  }, [])

  async function fetchSpecificEmployee(id: string) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`)
      setEmployee(response.data.data)
    } catch (error) {
      console.error("Error fetching employee:", error)
      toast.error("Failed to fetch employee details")
    }
  }

  if (!employee) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Details</h2>
          <div className="space-y-3">
            <p className="text-gray-700"><span className="font-semibold">Name:</span> {employee.name}</p>
            <p className="text-gray-700"><span className="font-semibold">Role:</span> {employee.role}</p>
            <p className="text-gray-700"><span className="font-semibold">Department:</span> {employee.department}</p>
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {employee.email}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Back to All Employees
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowSpecificEmployee
