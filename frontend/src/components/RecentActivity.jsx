function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Applied for Java Developer Internship",
      date: "Today",
    },
    {
      id: 2,
      title: "Profile Updated Successfully",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Application Shortlisted",
      date: "2 Days Ago",
    },
    {
      id: 4,
      title: "New Internship Posted by Infosys",
      date: "3 Days Ago",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="font-semibold">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;