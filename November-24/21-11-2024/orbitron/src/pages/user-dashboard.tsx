import { MainContent } from "../components/user-dashboard/main-context";
import { Sidebar } from "../components/user-dashboard/sidebar";

export default function UserDashboard() {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-900 p-4">
      <div className="flex h-full w-full">
      <Sidebar />
      <MainContent />
      </div>
    </div>
  )
}

