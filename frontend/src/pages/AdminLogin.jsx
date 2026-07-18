import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/admins/login", admin);

      if (response.data && response.data.id) {
        toast.success("Admin Login Successful");

        localStorage.setItem(
          "admin",
          JSON.stringify(response.data)
        );

        navigate("/admin-dashboard");
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Admin Email"
              value={admin.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={admin.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;