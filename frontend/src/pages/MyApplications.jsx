import { useEffect, useState } from "react";
import api from "../services/api";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const student = JSON.parse(localStorage.getItem("student"));

      const response = await api.get("/applications");

      const myApplications = response.data.filter(
        (app) => app.studentEmail === student.email
      );

      setApplications(myApplications);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        My Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-gray-600 text-lg">
          No Applications Found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {app.internship?.internshipTitle}
              </h2>

              <p className="mt-2">
                <strong>Company:</strong>{" "}
                {app.internship?.companyName}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {app.internship?.location}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  {app.applicationStatus}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyApplications;