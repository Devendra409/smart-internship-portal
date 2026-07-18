import { Link } from "react-router-dom";
import StatsSection from "../components/StatsSection";
import TopCompanies from "../components/TopCompanies";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import CompanyLogos from "../components/CompanyLogos";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Smart Internship
                <br />
                Application Portal
              </h1>

              <p className="mt-6 text-lg text-gray-200">
                Discover internships from top companies, apply online,
                and manage all your applications in one place.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  to="/internships"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Browse Internships
                </Link>

                <Link
                  to="/register"
                  className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Students"
                className="rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* Top Companies */}
      <TopCompanies />

      {/* Testimonials */}
      <Testimonial />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Start Your Career Today
          </h2>

          <p className="mt-4 text-lg">
            Register now and apply for internships from leading companies.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Register Now
          </Link>

        </div>
      </section>
      <CompanyLogos />
    </>
  );
}

export default Home;