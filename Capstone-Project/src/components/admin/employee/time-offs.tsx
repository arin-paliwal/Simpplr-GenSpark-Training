import { Search } from 'lucide-react'

interface TimeOffRequest {
  id: number
  employee: {
    name: string
    avatar: string
  }
  leaveType: 'Annual Leave' | 'Sick Leave'
  leaveFrom: string
  leaveTo: string
  days: number
  status: 'Pending' | 'Approved'
}

const timeOffRequests: TimeOffRequest[] = [
  {
    id: 1,
    employee: {
      name: "Brooklyn Simmons",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    leaveType: "Annual Leave",
    leaveFrom: "Jan 23, 2024",
    leaveTo: "Jan 24, 2024",
    days: 1,
    status: "Pending"
  },
  {
    id: 2,
    employee: {
      name: "Ralph Edwards",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    leaveType: "Sick Leave",
    leaveFrom: "Jan 23, 2024",
    leaveTo: "Jan 27, 2024",
    days: 4,
    status: "Pending"
  },
  {
    id: 3,
    employee: {
      name: "Leslie Alexander",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    leaveType: "Annual Leave",
    leaveFrom: "Jan 12, 2024",
    leaveTo: "Jan 14, 2024",
    days: 2,
    status: "Approved"
  },
  {
    id: 4,
    employee: {
      name: "Cody Fisher",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    leaveType: "Sick Leave",
    leaveFrom: "Jan 04, 2024",
    leaveTo: "Jan 06, 2024",
    days: 2,
    status: "Approved"
  },
  {
    id: 5,
    employee: {
      name: "Arlene McCoy",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    leaveType: "Annual Leave",
    leaveFrom: "Jan 03, 2024",
    leaveTo: "Jan 08, 2024",
    days: 5,
    status: "Approved"
  }
]

const getLeaveTypeStyle = (leaveType: string) => {
  return leaveType === 'Annual Leave' 
    ? 'bg-[#E5F3FF] text-lightMode-accentLightBlue dark:bg-darkMode-accentLightBlue/20 dark:text-darkMode-accentLightBlue'
    : 'bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen'
}

export default function Timeoff() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Request Time Off
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search keyword..."
              className="w-64 h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-darkMode-secondaryBackground text-lightMode-primaryText dark:text-darkMode-primaryText border border-borders-primary focus:outline-none focus:border-lightMode-accentBlue dark:focus:border-darkMode-accentBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lightMode-secondaryText dark:text-darkMode-secondaryText" />
          </div>
          <button className="px-4 py-2 flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border border-borders-primary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground">
            Filter
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary">
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,1fr] px-6 py-4 border-b border-borders-primary">
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Employee Name</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Leave Type</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Leave From</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Leave To</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Days</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText">Status</div>
          <div className="text-sm font-medium text-lightMode-secondaryText dark:text-darkMode-secondaryText"></div>
        </div>

        {timeOffRequests.map((request) => (
          <div key={request.id} className="grid grid-cols-[2fr,1fr,1fr,1fr,0.5fr,1fr,1fr] px-6 py-4 border-b border-borders-primary last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={request.employee.avatar} alt="" className="w-10 h-10 rounded-full" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-darkMode-background"></div>
              </div>
              <div className="font-medium text-lightMode-primaryText dark:text-darkMode-primaryText">
                {request.employee.name}
              </div>
            </div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm ${getLeaveTypeStyle(request.leaveType)}`}>
                {request.leaveType}
              </span>
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.leaveFrom}
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.leaveTo}
            </div>
            <div className="flex items-center text-lightMode-primaryText dark:text-darkMode-primaryText">
              {request.days}
            </div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm ${
                request.status === 'Pending'
                  ? 'bg-[#FFF4E5] text-lightMode-accentOrange dark:bg-darkMode-accentOrange/20 dark:text-darkMode-accentOrange'
                  : 'bg-[#E2F9F3] text-lightMode-accentGreen dark:bg-darkMode-accentGreen/20 dark:text-darkMode-accentGreen'
              }`}>
                {request.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {request.status === 'Pending' ? (
                <>
                  <button className="px-3 py-1 text-sm text-lightMode-accentGreen dark:text-darkMode-accentGreen hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground rounded">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-sm text-red-500 hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground rounded">
                    Reject
                  </button>
                </>
              ) : (
                <button className="px-3 py-1 text-sm text-lightMode-secondaryText dark:text-darkMode-secondaryText hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground rounded">
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

