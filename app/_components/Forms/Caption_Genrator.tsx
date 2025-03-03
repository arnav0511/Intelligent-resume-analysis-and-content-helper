"use client";
import React, { useState } from "react";
import { caption } from "@/app/action"; 
import ReactMarkdown from "react-markdown";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
export default function Caption() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    setResult("");
    setError("");

    try {
      const response = await caption(formData);

      if (response.error) {
        setError(response.error);
      } else {
        setResult(response.result);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <Link
        href={"/dashboard"}
        className="border rounded-full h-10 border-black flex items-center fixed top-5 left-5"
      >
        <IoIosArrowBack size={40} />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 "
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Generate a LinkedIn Caption
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Input:
            </label>
            <textarea
              name="userInput"
              required
              placeholder="Enter details..."
              className="block w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Tone:
            </label>
            <select
              name="tone"
              required
              className="block w-full border rounded-lg p-3"
            >
              <option value="Professional">Professional</option>
              <option value="Casual">Casual</option>
              <option value="Inspirational">Inspirational</option>
            </select>
          </div>

          {error && <p className="text-red-500 font-medium">{error}</p>}

          {result && (
            <div className="p-4 bg-gray-100 border rounded-lg text-gray-800">
              <p className="font-semibold">Generated Caption:</p>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Generate Caption
          </button>
        </div>
      </form>
    </div>
  );
}
