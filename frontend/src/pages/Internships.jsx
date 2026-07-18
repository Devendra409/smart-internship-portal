import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import api from "../services/api";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await api.get("/internships");
      setInternships(response.data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  const filteredInternships = internships.filter((item) =>
    (item.companyName || "").toLowerCase().includes(search.toLowerCase()) ||
    (item.internshipTitle || "").toLowerCase().includes(search.toLowerCase()) ||
    (item.location || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Available Internships
      </h1>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredInternships.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-10">
          No internships available.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredInternships.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <h2 className="text-2xl font-bold text-blue-700">
                {item.companyName}
              </h2>

              <p className="mt-3 text-lg font-semibold">
                {item.internshipTitle}
              </p>

              <p className="mt-2 text-gray-600">
                📍 {item.location}
              </p>

              <p className="mt-2 text-green-600 font-bold">
                💰 {item.stipend}
              </p>

              <p className="mt-2 text-gray-500">
                ⏳ {item.duration}
              </p>

              <div className="flex justify-between mt-6">

                <Link
                  to={`/internships/${item.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  View Details
                </Link>

               <Link
  to={`/internships/${item.id}`}
  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
>
  Apply
</Link>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Internships;