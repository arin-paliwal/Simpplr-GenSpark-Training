import MainContent from "../components/admin-dashboard/main-context";
import Sidebar from "../components/admin-dashboard/sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900 p-4">
      <div className="flex h-full w-full">
      <Sidebar />
      <MainContent />
      </div>
    </div>
  )
}

