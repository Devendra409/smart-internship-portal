function CompanyLogos() {
  const companies = [
    "Infosys",
    "TCS",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "HCL",
    "Tech Mahindra",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Hiring Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {company}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;