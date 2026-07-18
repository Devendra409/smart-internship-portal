import { useState } from "react";
import { toast } from "react-hot-toast";
import AdminSidebar from "../components/AdminSidebar";
import api from "../services/api";

function AddInternship() {
  const [formData, setFormData] = useState({
    companyName: "",
    internshipTitle: "",
    location: "",
    duration: "",
    stipend: "",
    description: "",
    skillsRequired: "",
    lastDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/internships", formData);

      toast.success("Internship Added Successfully");

      setFormData({
        companyName: "",
        internshipTitle: "",
        location: "",
        duration: "",
        stipend: "",
        description: "",
        skillsRequired: "",
        lastDate: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to Add Internship");
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">

          <h1 className="text-3xl font-bold mb-6">
            Add Internship
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full border p-3 rounded"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="internshipTitle"
              placeholder="Internship Title"
              className="w-full border p-3 rounded"
              value={formData.internshipTitle}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full border p-3 rounded"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="duration"
              placeholder="Duration (Example: 6 Months)"
              className="w-full border p-3 rounded"
              value={formData.duration}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="stipend"
              placeholder="Stipend"
              className="w-full border p-3 rounded"
              value={formData.stipend}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="description"
              placeholder="Description"
              className="w-full border p-3 rounded"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="skillsRequired"
              placeholder="Skills Required"
              className="w-full border p-3 rounded"
              value={formData.skillsRequired}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="lastDate"
              className="w-full border p-3 rounded"
              value={formData.lastDate}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Add Internship
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddInternship;