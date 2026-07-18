import toast from "react-hot-toast";


const handleSubmit = (e) => {
  e.preventDefault();

  toast.success("Application Submitted Successfully!");

  onClose();
};

function ApplyModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Apply Internship
        </h2>

        {/* <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="College Name"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Why should we hire you?"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Submit
            </button>

          </div>

        </form> */}

        <form onSubmit={handleSubmit} className="space-y-4"></form>

      </div>

    </div>
  );
}

export default ApplyModal;