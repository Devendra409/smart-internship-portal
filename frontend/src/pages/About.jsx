function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        About Internship Portal
      </h1>

      <p className="text-lg text-gray-700 leading-8 text-center max-w-4xl mx-auto">
        Smart Internship Application Portal is a platform where students can
        search internships, apply online, track applications, and improve
        their career opportunities. It connects students with companies through
        a simple and user-friendly interface.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-600">
            To help every student find the best internship opportunities.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-600">
            Our Vision
          </h2>

          <p className="mt-4 text-gray-600">
            Build a bridge between students and industry.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-600">
            Our Goal
          </h2>

          <p className="mt-4 text-gray-600">
            Make internship applications fast and easy.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;