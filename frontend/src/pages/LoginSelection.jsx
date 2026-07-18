import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaUserShield, FaUserTie, FaArrowLeft } from "react-icons/fa";

function LoginSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Smart Internship Portal
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Select your role to continue
        </p>

        <button
          onClick={() => navigate("/login")}
          className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-3 rounded-lg mb-4 hover:bg-green-700 transition"
        >
          <FaUserGraduate />
          Student Login
        </button>

        <button
          onClick={() => navigate("/admin-login")}
          className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition"
        >
          <FaUserShield />
          Admin Login
        </button>

        <button
          onClick={() => navigate("/manager-login")}
          className="w-full flex items-center justify-center gap-3 bg-purple-600 text-white py-3 rounded-lg mb-6 hover:bg-purple-700 transition"
        >
          <FaUserTie />
          Manager Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full border border-gray-400 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FaArrowLeft />
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default LoginSelection;