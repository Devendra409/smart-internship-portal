import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../services/api";

function InternshipDetails() {
  const { id } = useParams();

  const [internship, setInternship] = useState(null);

  useEffect(() => {
    fetchInternship();
  }, []);

  const fetchInternship = async () => {
    try {
      const response = await api.get(`/internships/${id}`);
      setInternship(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load internship");
    }
  };

  const handleApply = async () => {
    try {
      const student = JSON.parse(localStorage.getItem("student"));

      if (!student) {
        toast.error("Please login first");
        return;
      }

      const application = {
        studentName: student.fullName,
        studentEmail: student.email,
        studentPhone: student.phone,
        internship: {
          id: internship.id,
        },
      };

      await api.post("/applications", application);

      toast.success("Application Submitted Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Apply");
    }
  };

  if (!internship) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading Internship...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {internship.internshipTitle}
        </h1>

        <p className="text-lg mb-2">
          <strong>Company:</strong> {internship.companyName}
        </p>

        <p className="text-lg mb-2">
          <strong>Location:</strong> {internship.location}
        </p>

        <p className="text-lg mb-2">
          <strong>Duration:</strong> {internship.duration}
        </p>

        <p className="text-lg mb-2">
          <strong>Stipend:</strong> {internship.stipend}
        </p>

        <p className="text-lg mb-2">
          <strong>Last Date:</strong> {internship.lastDate}
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-bold mb-3">
          Description
        </h2>

        <p className="text-gray-700 leading-8">
          {internship.description}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          Skills Required
        </h2>

        <p className="text-gray-700">
          {internship.skillsRequired}
        </p>

        <div className="mt-10 flex gap-4">

          <button
            onClick={handleApply}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Apply Now
          </button>

          <Link
            to="/internships"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back
          </Link>

        </div>

      </div>
    </div>
  );
}

export default InternshipDetails;