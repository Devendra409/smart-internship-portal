import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/students/login", loginData);

      if (response.data) {
        toast.success("Login Successful");

        localStorage.setItem(
          "student",
          JSON.stringify(response.data)
        );

        navigate("/student-dashboard");
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
          Student Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full border rounded-lg p-3"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border rounded-lg p-3"
              value={loginData.password}
              onChange={handleChange}
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

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;