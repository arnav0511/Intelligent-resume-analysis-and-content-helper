'use client'
import React, { useState } from "react";

function Caption() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsGenerating(true);
    setProgress(0);

    // Simulate generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 5; // Increment progress by 5% every 200ms
      });
    }, 200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 transform transition-all hover:scale-105"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
          Generate a LinkedIn Caption
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base leading-relaxed">
          Provide your input and desired tone to generate an engaging LinkedIn caption.
        </p>

        <div className="space-y-8">
          {/* User Input */}
          <div>
            <label
              htmlFor="userInput"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Input:
            </label>
            <textarea
              name="userInput"
              id="userInput"
              required
              placeholder="Enter your informal or formal description (e.g., skills, goals, achievements, roles, etc.)"
              className="block w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            ></textarea>
          </div>

          {/* Desired Tone */}
          <div>
            <label
              htmlFor="tone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Desired Tone:
            </label>
            <select
              name="tone"
              id="tone"
              required
              className="block w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select tone
              </option>
              <option value="Professional">Professional</option>
              <option value="Casual">Casual</option>
              <option value="Inspirational">Inspirational</option>
            </select>
          </div>

          {/* Progress Bar */}
          {isGenerating && (
            <div>
              <progress
                className="progress progress-info w-full"
                value={progress}
                max="100"
              ></progress>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Generating... {progress}%
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Caption"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Caption;
