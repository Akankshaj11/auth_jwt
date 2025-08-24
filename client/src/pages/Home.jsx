
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // get JWT from login
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data); // store user data in state
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">
          Welcome {user?.username} 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          We're glad to have you back. Here are your details:
        </p>

        <div className="bg-indigo-50 p-4 rounded-xl shadow-sm text-left">
          <p className="text-gray-800">
            <span className="font-semibold">👤 Username:</span> {user?.username}
          </p>
          <p className="text-gray-800 mt-2">
            <span className="font-semibold">📧 Email:</span> {user?.email}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
