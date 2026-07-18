import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login-selection");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-purple-700 text-white p-5 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">
          Manager Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">

        {/* Add Admin */}
        <div
          onClick={() => navigate("/add-admin")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-purple-700">
            Add Admin
          </h2>
          <p className="text-gray-600 mt-3">
            Create a new administrator account.
          </p>
        </div>

        {/* View Admins */}
        <div
          onClick={() => navigate("/view-admins")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-blue-700">
            View Admins
          </h2>
          <p className="text-gray-600 mt-3">
            View all administrator accounts.
          </p>
        </div>

        {/* View Students */}
        <div
          onClick={() => navigate("/students")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-green-700">
            View Students
          </h2>
          <p className="text-gray-600 mt-3">
            View all registered students.
          </p>
        </div>

        {/* Add Internship */}
        <div
          onClick={() => navigate("/add-internship")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-orange-600">
            Add Internship
          </h2>
          <p className="text-gray-600 mt-3">
            Create new internship opportunities.
          </p>
        </div>

        {/* View Internships */}
        <div
          onClick={() => navigate("/internships")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-indigo-700">
            View Internships
          </h2>
          <p className="text-gray-600 mt-3">
            View all internships.
          </p>
        </div>

        {/* View Applications */}
        <div
          onClick={() => navigate("/applications")}
          className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-red-600">
            View Applications
          </h2>
          <p className="text-gray-600 mt-3">
            Review all internship applications.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ManagerDashboard;