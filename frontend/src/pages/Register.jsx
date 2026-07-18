import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    branch: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await api.post("/students/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        college: formData.college,
        course: formData.course,
        branch: formData.branch,
        year: formData.year,
      });

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            className="w-full border rounded-lg p-3"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            className="w-full border rounded-lg p-3"
            value={formData.course}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="branch"
            placeholder="Branch"
            className="w-full border rounded-lg p-3"
            value={formData.branch}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="year"
            placeholder="Year"
            className="w-full border rounded-lg p-3"
            value={formData.year}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;