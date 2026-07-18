import AdminSidebar from "../components/AdminSidebar";

function EditInternship() {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <div className="bg-white p-8 rounded-xl shadow max-w-2xl">
          <h1 className="text-3xl font-bold mb-6">Edit Internship</h1>

          <form className="space-y-4">
            <input
              type="text"
              defaultValue="Infosys"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              defaultValue="Java Developer"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              defaultValue="Hyderabad"
              className="w-full border p-3 rounded"
            />

            <textarea
              rows="5"
              className="w-full border p-3 rounded"
              defaultValue="Internship Description"
            ></textarea>

            <button className="bg-green-600 text-white px-6 py-3 rounded">
              Update Internship
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditInternship; 