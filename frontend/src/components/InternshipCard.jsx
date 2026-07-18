function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold">{internship.company}</h2>

      <p className="mt-2">{internship.role}</p>

      <p className="text-gray-500">{internship.location}</p>

      <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}

export default InternshipCard;