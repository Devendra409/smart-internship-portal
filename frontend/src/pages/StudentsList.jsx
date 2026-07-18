import AdminSidebar from "../components/AdminSidebar";

function StudentsList() {
  const students = [
    {
      id: 1,
      name: "Rukmini",
      email: "rukmini@gmail.com",
      course: "M.Tech CSE",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      course: "B.Tech CSE",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      course: "MBA",
    },
  ];

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Students List</h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b text-center">
                  <td className="p-4">{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentsList;