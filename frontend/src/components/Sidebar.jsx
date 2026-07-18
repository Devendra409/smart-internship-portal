import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/login-selection");
  };

  return (
    <div className="bg-blue-700 text-white w-64 min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        Student Panel
      </h2>

      <nav className="space-y-4">

        <Link
          to="/student-dashboard"
          className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/internships"
          className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg"
        >
          <FaBriefcase />
          Internships
        </Link>

        <Link
          to="/my-applications"
          className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg"
        >
          <FaFileAlt />
          My Applications
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg"
        >
          <FaUser />
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 bg-red-600 hover:bg-red-700 p-3 rounded-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;