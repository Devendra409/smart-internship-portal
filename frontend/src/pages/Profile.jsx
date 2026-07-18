import { useState } from "react";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Rukmini",
    email: "student@gmail.com",
    phone: "9876543210",
    course: "M.Tech CSE",
    college: "ABC Engineering College",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
  toast.success("Profile Updated Successfully!");
};

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-blue-700 mb-8">
            My Profile
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Course</label>
              <input
                type="text"
                name="course"
                value={profile.course}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">College</label>
              <input
                type="text"
                name="college"
                value={profile.college}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

          </div>

          <button
  onClick={handleUpdate}
  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
>
  Update Profile
</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;