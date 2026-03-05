import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const formhandle = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/register", {
      name,
      age,
      address,
      email,
      password,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">
      <div className="w-full max-w-md bg-gray-950 rounded-2xl shadow-2xl p-8 border border-red-800">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
          Create Account
        </h2>

        <form onSubmit={formhandle} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2"
            onChange={(e) => setname(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2"
            onChange={(e) => setage(Number(e.target.value))}
          />

          <textarea
            placeholder="Address"
            className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2"
            onChange={(e) => setaddress(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2"
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-gray-900 text-white border border-gray-700 px-3 py-2"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
