import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.webp";
import api from "../api/api"; // ✅ import the shared axios instance

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/login", {
      username,
      password,
    });

      console.log("Login success:", res.data);

      // Example: save token or user info if your backend sends one
      // localStorage.setItem("token", res.data.token);

      navigate("/"); // ✅ Redirect after login (adjust route as needed)
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "Invalid email or password");
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
            Hey there! 👋
          </h3>
          <p className="text-center text-black font-semibold mb-6 text-xs tracking-tighter">
            Enter your email and password to login
          </p>

          {error && (
            <p className="text-center text-red-500 text-sm mb-3">{error}</p>
          )}

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-xs font-semibold mb-2 text-black">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>

          <p className="mt-6 text-center text-xs">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-300">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="login"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
