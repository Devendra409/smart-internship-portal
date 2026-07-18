import { Link, useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import RecentApplications from "../components/RecentApplications";
import ApplicationStatusChart from "../components/ApplicationStatusChart";
import AdminNotifications from "../components/AdminNotifications";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("admin");
  navigate("/login-selection");
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <DashboardCard
          title="Students"
          value="120"
          color="bg-indigo-600"
        />

        <DashboardCard
          title="Internships"
          value="18"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Applications"
          value="245"
          color="bg-green-600"
        />

        <DashboardCard
          title="Pending"
          value="36"
          color="bg-red-500"
        />

      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">

        <Link
          to="/add-internship"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Add Internship
        </Link>

        <Link
          to="/internships"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View Internships
        </Link>

        <Link
          to="/students"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          View Students
        </Link>

        <Link
          to="/applications"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
        >
          View Applications
        </Link>

      </div>

      {/* Recent Applications */}
      <div className="mt-10">
        <RecentApplications />
      </div>

      {/* Status Chart */}
      <div className="mt-10">
        <ApplicationStatusChart />
      </div>

      {/* Notifications */}
      <div className="mt-10">
        <AdminNotifications />
      </div>

    </div>
  );
}

export default AdminDashboard;