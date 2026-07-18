import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddAdmin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/admins", admin);

      alert("Admin Added Successfully");

      navigate("/view-admins");

    } catch (error) {
      console.error(error);
      alert("Failed to Add Admin");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={admin.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={admin.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={admin.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            Add Admin
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddAdmin;