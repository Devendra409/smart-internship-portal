import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserGraduate } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-700"
        >
          <FaUserGraduate />
          Internship Portal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/internships" className="hover:text-blue-600">
              Internships
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login-selection"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-5 space-y-4">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/internships" onClick={() => setMenuOpen(false)}>
              Internships
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link
              to="/login-selection"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;