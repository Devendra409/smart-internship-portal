import { useEffect, useState } from "react";
import api from "../services/api";

function ApplicationStatusChart() {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    fetchStatusData();
  }, []);

  const fetchStatusData = async () => {
    try {
      const response = await api.get("/applications");
      const applications = response.data;

      const total = applications.length || 1;

      const pending = applications.filter(
        (app) => app.applicationStatus === "Pending"
      ).length;

      const selected = applications.filter(
        (app) => app.applicationStatus === "Selected"
      ).length;

      const rejected = applications.filter(
        (app) => app.applicationStatus === "Rejected"
      ).length;

      setStatusData([
        {
          status: "Pending",
          value: Math.round((pending / total) * 100),
          color: "bg-orange-500",
        },
        {
          status: "Selected",
          value: Math.round((selected / total) * 100),
          color: "bg-green-500",
        },
        {
          status: "Rejected",
          value: Math.round((rejected / total) * 100),
          color: "bg-red-500",
        },
      ]);
    } catch (error) {
      console.error("Error fetching application status:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Application Status
      </h2>

      {statusData.map((item, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between mb-2">
            <span>{item.status}</span>
            <span>{item.value}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`${item.color} h-4 rounded-full`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicationStatusChart;