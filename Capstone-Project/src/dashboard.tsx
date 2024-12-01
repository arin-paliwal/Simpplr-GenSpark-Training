"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  UserPlus,
  DollarSign,
  Calendar,
  Settings,
  HelpCircle,
  ChevronDown,
  Info,
  Copy,
  MoreVertical,
} from "lucide-react";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded">
              <div className="w-5 h-5" />
            </div>
            <span className="font-semibold">BordUp™</span>
            <Copy className="w-4 h-4 ml-auto text-gray-400" />
          </div>
        </div>

        {/* Company Info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-gray-900 text-white p-2 rounded">
              <div className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium">Rocks Company</div>
              <div className="text-sm text-gray-500">Team - 50 Members</div>
            </div>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </div>
        </div>

        {/* Navigation */}
        <div className="p-2">
          <div className="text-sm font-medium text-gray-500 px-3 py-2">
            MAIN MENU
          </div>
          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: BarChart3, color: "text-blue-600" },
              { name: "Employee", icon: Users, color: "text-gray-500" },
              { name: "Recruitment", icon: UserPlus, color: "text-gray-500" },
              { name: "Payroll", icon: DollarSign, color: "text-gray-500" },
              { name: "Schedule", icon: Calendar, color: "text-gray-500" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg ${
                  activeNav === item.name
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="text-sm font-medium text-gray-500 px-3 py-2 mt-4">
            DEPARTMENT
          </div>
          <nav className="space-y-1">
            {[
              { name: "Business and Marketing", color: "bg-blue-600" },
              { name: "Design", color: "bg-emerald-500" },
              { name: "Project Manager", color: "bg-orange-500" },
              { name: "Human Resource", color: "bg-purple-500" },
              { name: "Development", color: "bg-blue-500" },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="text-sm font-medium text-gray-500 px-3 py-2 mt-4">
            OTHER
          </div>
          <nav className="space-y-1">
            {[
              { name: "Setting", icon: Settings },
              { name: "Help Center", icon: HelpCircle },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 text-gray-500" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Payment Method */}
        <div className="bg-white rounded-xl border p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <button className="text-sm text-blue-600">
              Change Payment Method
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Cardholder name</div>
              <div className="font-medium">Rocks Company Ltd</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Account Number</div>
              <div className="font-medium flex items-center gap-2">
                •••• •••• •••• 6273
                <Copy className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Expiration</div>
              <div className="font-medium">12/28</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Payment Method</div>
              <div className="font-medium flex items-center gap-2">
                <div className="text-blue-600 font-bold">VISA</div>
                Debit Card
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">What's on in January?</h2>
              <div className="flex gap-2">
                <button className="px-4 py-1 text-sm bg-gray-50 rounded-full">
                  Time Off
                </button>
                <button className="px-4 py-1 text-sm bg-gray-50 rounded-full">
                  Birthday
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Elanoire Maggie",
                  role: "UI UX Designer",
                  status: "Sick Leave",
                },
                {
                  name: "Kevin Malona",
                  role: "UI UX Designer",
                  status: "Annual Leave",
                },
                {
                  name: "Jeremy Gemoy",
                  role: "Graphic Design",
                  status: "Work From Home",
                },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div>
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-gray-500">
                      {person.role} • {person.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Today Schedule</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm">Jan 28, 2024</span>
                <ChevronDown className="w-4 h-4" />
                <button className="ml-2 px-4 py-1 text-sm bg-blue-600 text-white rounded-full">
                  Add Task
                </button>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              {["08:00", "09:00", "09:35", "10:00", "11:00"].map((time) => (
                <div key={time}>{time}</div>
              ))}
            </div>
            <div className="relative h-40">
              <div className="absolute left-[20%] top-0 w-[30%] h-12 bg-emerald-100 rounded-lg px-3 py-2">
                <div className="text-sm">
                  Online Interview with UI Candidate
                </div>
              </div>
              <div className="absolute left-[60%] top-4 w-[20%] h-10 bg-orange-100 rounded-lg px-3 py-2">
                <div className="text-sm">Weekly meeting</div>
              </div>
              <div className="absolute left-[85%] top-8 w-[15%] h-10 bg-purple-100 rounded-lg px-3 py-2">
                <div className="text-sm">Psychology test</div>
              </div>
              <div className="absolute left-[40%] top-20 w-[25%] h-12 bg-emerald-100 rounded-lg px-3 py-2">
                <div className="text-sm">Replying email to applicants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee List */}
        <div className="bg-white rounded-xl border p-6 mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Employee</h2>
            <button className="text-sm text-gray-500">See Details</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="text-left font-medium py-2">Employee Name</th>
                <th className="text-left font-medium py-2">Department</th>
                <th className="text-left font-medium py-2">Job Title</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Brooklyn Simmons",
                  email: "brok-simms@mail.com",
                  department: "Design",
                  role: "UI Designer",
                },
                {
                  name: "Cody Fisher",
                  email: "cody_fisher99@mail.com",
                  department: "Development",
                  role: "Front-End",
                },
                {
                  name: "Ralph Edwards",
                  email: "ralp_uxdsg@mail.com",
                  department: "Design",
                  role: "UX Designer",
                },
              ].map((employee) => (
                <tr key={employee.name} className="border-t">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-gray-500">
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        employee.department === "Design"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {employee.department}
                    </span>
                  </td>
                  <td className="text-gray-500">{employee.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Work Hours Chart */}
        <div className="bg-white rounded-xl border p-6 mt-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Member Work Hours</h2>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <button className="text-sm text-gray-500">View by Person</button>
          </div>
          <div className="flex items-end justify-between h-48">
            {[24, 28, 32, 24, 28, 20, 16].map((height, i) => (
              <div key={i} className="w-20 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-blue-600 rounded-t-lg"
                  style={{ height: `${height * 2}px` }}
                />
                <div className="text-sm text-gray-500">Jan {24 + i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
