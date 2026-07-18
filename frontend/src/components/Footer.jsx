import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Internship Portal
          </h2>

          <p className="text-gray-400">
            Smart Internship Application Portal helps students discover
            internships, apply online, and track their applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Student */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Student</h3>

          <ul className="space-y-2">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/student-dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaGithub className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Smart Internship Application Portal. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;