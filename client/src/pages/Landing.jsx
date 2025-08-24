import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to Our App!
      </h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Join us today and experience the amazing features of our platform. Sign
        up now to get started!
      </p>
      <Link
        to="/register"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        Register Now
      </Link>
    </div>
  );
}

export default Landing;
