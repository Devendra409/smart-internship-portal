function TopCompanies() {
  const companies = [
    "Infosys",
    "TCS",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Top Companies
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold">{company}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;