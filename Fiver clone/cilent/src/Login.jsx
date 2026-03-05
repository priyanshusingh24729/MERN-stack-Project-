import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const formhandle = (e) => {
    e.preventDefault(); // ✅ FIXED

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">
      <div className="w-full max-w-md bg-gray-950 rounded-2xl shadow-2xl p-8 border border-red-800">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
          Login
        </h2>

        <form onSubmit={formhandle} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


