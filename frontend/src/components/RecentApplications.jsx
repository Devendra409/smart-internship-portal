import { useEffect, useState } from "react";
import api from "../services/api";

function RecentApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");

      // Show latest 5 applications
      const latestApplications = response.data
        .slice()
        .reverse()
        .slice(0, 5);

      setApplications(latestApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8 overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Recent Applications
      </h2>

      {applications.length === 0 ? (
        <p className="text-gray-500 text-center">
          No Applications Found
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Internship</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-3">{app.studentName}</td>
                <td className="p-3">
                  {app.internship?.companyName}
                </td>
                <td className="p-3">
                  {app.internship?.internshipTitle}
                </td>
                <td className="p-3">
                  <span className="text-green-600 font-semibold">
                    {app.applicationStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RecentApplications;