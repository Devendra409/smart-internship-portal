import AdminSidebar from "../components/AdminSidebar";
import DashboardCard from "../components/DashboardCard";

function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Students"
            value="120"
            color="bg-blue-600"
          />

          <DashboardCard
            title="Internships"
            value="18"
            color="bg-green-600"
          />

          <DashboardCard
            title="Applications"
            value="250"
            color="bg-purple-600"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;