"use client";
import { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // ← Add this line

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error if valid
    console.log("Form submitted", { email });
  };


  return (
    <div className="flex flex-col  md:flex-row items-start md:items-center md:shadow-2xl justify-start md:justify-center min-h-screen bg-white">
      {/* Left Section (Welcome Message) - Hidden on mobile */}
      <div
        className="hidden md:block w-80 h-[680px] bg-cover bg-center flex-col justify-start items-start p-6 text-white"
        style={{ backgroundImage: "url('/theme/theme1.jpg')" }}
      >
        <div className="max-w-xs text-left md:shadow-2xl">
          <h2 className="text-5xl font-semibold text-cyan-400">Welcome Back</h2>
          <p className="mt-8 text-sm">
            Shop millions of live events, discover can&apos;t-miss concerts,
            games, theatre, and more — all with secure and effortless ticketing.
          </p>
        </div>
      </div>

      {/* Right Section (Form) - Full width on mobile, aligned to top-left */}
      <div className="w-full md:w-140 h-screen  md:h-[680px] p-6 bg-white md:bg-white md:shadow-lg">
        <div className="text-left mb-4">
          <h2 className="text-lg font-semibold uppercase">Sign In</h2>
          <p className="text-sm mt-2">
            If you don&apost have an account, you will be prompted to create one.
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
              className="w-full p-1 mt-2 border border-black"
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
              className="px-4 py-1 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              disabled={!email}
            >
              Continue
            </button>
          </div>

          <div className="mt-6 text-left md:shadow-2xl text-xs text-gray-500">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
