function SearchBar({ value, onChange }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by company, role or location..."
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;