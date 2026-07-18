function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      message: "5 new internship applications received.",
    },
    {
      id: 2,
      message: "2 new students registered today.",
    },
    {
      id: 3,
      message: "Java Developer internship expires in 2 days.",
    },
    {
      id: 4,
      message: "Profile update request pending approval.",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Notifications
      </h2>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-lg"
          >
            <p className="text-gray-700">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminNotifications;