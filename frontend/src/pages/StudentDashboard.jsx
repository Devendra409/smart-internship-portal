import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import RecentActivity from "../components/RecentActivity";
import Statistics from "../components/Statistics";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome Student 👋
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Applied"
            value="12"
            color="bg-blue-600"
          />

          <DashboardCard
            title="Selected"
            value="5"
            color="bg-green-600"
          />

          <DashboardCard
            title="Pending"
            value="7"
            color="bg-orange-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Link
            to="/internships"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            View Internships
          </Link>

          <Link
            to="/my-applications"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            My Applications
          </Link>
        </div>

        <RecentActivity />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Latest Applications
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Company</th>
                <th className="text-left">Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Infosys</td>
                <td>Java Developer</td>
                <td className="text-green-600 font-bold">
                  Selected
                </td>
              </tr>

              <tr>
                <td className="py-4">TCS</td>
                <td>React Developer</td>
                <td className="text-orange-500 font-bold">
                  Pending
                </td>
              </tr>
            </tbody>
          </table>

          <Statistics />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;