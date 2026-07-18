import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";

function ViewApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications");
      setApplications(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load applications");
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      await api.delete(`/applications/${id}`);
      toast.success("Application deleted successfully");
      fetchApplications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete application");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        View Applications
      </h1>

      {applications.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No Applications Found
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">Student</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Company</th>
                <th className="p-3">Internship</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b text-center hover:bg-gray-50">
                  <td className="p-3">{app.studentName}</td>
                  <td className="p-3">{app.studentEmail}</td>
                  <td className="p-3">{app.studentPhone}</td>
                  <td className="p-3">{app.internship?.companyName}</td>
                  <td className="p-3">{app.internship?.internshipTitle}</td>
                  <td className="p-3">
                    <span className="text-green-600 font-semibold">
                      {app.applicationStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewApplications;