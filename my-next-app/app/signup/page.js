"use client";
import { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Proceed with signup logic here
    console.log("Form submitted", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Left Section (Welcome Message) */}
      <div
        className="w-80 h-[680px] bg-cover bg-center  shadow-lg flex flex-col justify-start items-start p-6 text-white"
        style={{ backgroundImage: "url('/theme/theme1.jpg')" }}
      >
        <div className="max-w-xs text-left">
          <h2 className="text-5xl font-semibold text-cyan-400">Welcome Back</h2>
          <p className="mt-8 text-sm">
            Shop millions of live events, discover can't-miss concerts, games,
            theatre, and more — all with secure and effortless ticketing.
          </p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-140 h-[680px] p-6 bg-white  shadow-lg ">
        <div className="text-left mb-4">
          <h2 className="text-lg font-semibold uppercase">Sign In</h2>
          <p className="text-sm mt-2">
            If you don’t have an account, you will be prompted to create one.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-sm content-left text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 mt-2 border border-black "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-1 bg-blue-600 text-white font-semibold  hover:bg-blue-700 transition"
              disabled={
                !email ||
                !password ||
                !confirmPassword ||
                password !== confirmPassword
              }
            >
              Continue
            </button>
          </div>

          <div className="mt-6 text-left text-xs text-gray-500">
            By continuing past this page, you agree to the{" "}
            <Link
              href="/terms-of-use"
              className="text-blue-600 hover:underline"
            >
              Terms of Use
            </Link>{" "}
            and understand that information will be used as described in our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
