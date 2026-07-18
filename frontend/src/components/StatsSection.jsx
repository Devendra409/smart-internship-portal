function StatsSection() {
  const stats = [
    { title: "Students", value: "500+" },
    { title: "Companies", value: "80+" },
    { title: "Internships", value: "250+" },
    { title: "Placements", value: "150+" },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white text-blue-700 rounded-xl shadow-lg p-6 text-center"
          >
            <h2 className="text-4xl font-bold">{item.value}</h2>
            <p className="mt-2 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;