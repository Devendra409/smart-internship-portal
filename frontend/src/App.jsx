import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginSelection from "./pages/LoginSelection";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import ManagerLogin from "./pages/ManagerLogin";
import Register from "./pages/Register";
import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";


import AddAdmin from "./pages/AddAdmin";
import ViewAdmins from "./pages/ViewAdmins";

// Student Pages
import StudentDashboard from "./pages/StudentDashboard";
import Profile from "./pages/Profile";
import MyApplications from "./pages/MyApplications";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import StudentsList from "./pages/StudentsList";
import AddInternship from "./pages/AddInternship";
import EditInternship from "./pages/EditInternship";
import ViewApplications from "./pages/ViewApplications";

// Manager Pages
import ManagerDashboard from "./pages/ManagerDashboard";

// Other
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internships/:id" element={<InternshipDetails />} />
        </Route>

        {/* Login */}
        <Route path="/login-selection" element={<LoginSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/register" element={<Register />} />

        {/* Student */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-applications" element={<MyApplications />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/add-internship" element={<AddInternship />} />
        <Route path="/edit-internship" element={<EditInternship />} />
        <Route path="/applications" element={<ViewApplications />} />

        {/* Manager */}
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        <Route path="/add-admin" element={<AddAdmin />} />
<Route path="/view-admins" element={<ViewAdmins />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;