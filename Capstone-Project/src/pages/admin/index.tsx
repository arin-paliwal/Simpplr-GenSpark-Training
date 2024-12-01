import Sidebar from '../../components/admin/Sidebar'

const AdminDashboard = () => {
  return (
    <div className='flex p-3 bg-lightMode-background'>
      <Sidebar />
      <div className='flex-1 p-5'>
        <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
        <p className='text-lg'>Welcome to the admin dashboard</p>
        </div>
    </div>
  )
}

export default AdminDashboard