import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-3">
        <Link
          to="/admin-dashboard"
          className="block p-3 rounded hover:bg-slate-700"
        >
          <FaHome className="inline mr-2" />
          Dashboard
        </Link>

        <Link
          to="/students"
          className="block p-3 rounded hover:bg-slate-700"
        >
          <FaUsers className="inline mr-2" />
          Students
        </Link>

        <Link
          to="/add-internship"
          className="block p-3 rounded hover:bg-slate-700"
        >
          <FaBriefcase className="inline mr-2" />
          Add Internship
        </Link>

        <Link
          to="/applications"
          className="block p-3 rounded hover:bg-slate-700"
        >
          <FaClipboardList className="inline mr-2" />
          Applications
        </Link>

        <Link
          to="/login"
          className="block p-3 rounded bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default AdminSidebar;