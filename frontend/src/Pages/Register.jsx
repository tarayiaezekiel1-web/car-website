import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../lib/axios";
import register from "../assets/register.webp";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/signup", {
      username,
      password,
    });
      setMessage("Account created successfully 🎉");
      console.log(res.data);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Rabbit 🐰</h3>
          </div>

          <h3 className="text-center tracking-tighter mb-2 text-lg font-semibold">
            Create your account 🐇
          </h3>
          <p className="text-center text-black font-semibold mb-6 text-xs tracking-tighter">
            Enter your username and password to sign up
          </p>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-xs font-semibold mb-2 text-black">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-xs font-semibold mb-2 text-black">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-bold py-2 rounded hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          {message && (
            <p className="text-center mt-4 text-xs font-semibold text-gray-700">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-xs">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="register"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
