import { useEffect, useState } from "react";
import api from "../services/api";

function ViewAdmins() {

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await api.get("/admins");
      setAdmins(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAdmin = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) {
      return;
    }

    try {
      await api.delete(`/admins/${id}`);
      fetchAdmins();
      alert("Admin Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        View Admins
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-purple-600 text-white">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            {admins.map((admin) => (

              <tr key={admin.id} className="text-center border-b">

                <td className="p-3">{admin.id}</td>
                <td className="p-3">{admin.fullName}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3">{admin.phone}</td>

                <td className="p-3">

                  <button
                    onClick={() => deleteAdmin(admin.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ViewAdmins;