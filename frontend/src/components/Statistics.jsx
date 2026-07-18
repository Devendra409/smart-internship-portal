function Statistics() {
  const stats = [
    {
      title: "Applied",
      value: 12,
      color: "bg-blue-500",
    },
    {
      title: "Shortlisted",
      value: 5,
      color: "bg-green-500",
    },
    {
      title: "Pending",
      value: 4,
      color: "bg-yellow-500",
    },
    {
      title: "Rejected",
      value: 3,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${item.color} text-white rounded-xl p-6 shadow-lg`}
        >
          <h3 className="text-lg">{item.title}</h3>

          <h1 className="text-4xl font-bold mt-3">
            {item.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Statistics;