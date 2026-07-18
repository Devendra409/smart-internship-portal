import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;