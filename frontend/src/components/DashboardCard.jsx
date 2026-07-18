function DashboardCard({ title, value, color }) {
  return (
    <div className={`${color} text-white rounded-xl shadow-lg p-6`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-4xl font-bold mt-3">{value}</p>
    </div>
  );
}

export default DashboardCard;