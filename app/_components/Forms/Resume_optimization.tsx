import React, { useState, useEffect } from "react";

function ATS() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = () => {
    setIsUploading(true);
    setProgress(0);

    // Simulate the file upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 5; // Increment progress by 5% every 200ms
      });
    }, 200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <form
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 transform transition-all hover:scale-105"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
          Optimize Your Resume
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base leading-relaxed">
          Upload your resume and enter the desired job role to get personalized, ATS-friendly optimization tips.
        </p>

        <div className="space-y-8">
          {/* Upload Your Resume */}
          <div>
            <label
              htmlFor="resumeFile"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Upload Your Resume:
            </label>
            <input
              type="file"
              id="resumeFile"
              name="resumeFile"
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border file:border-blue-500 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 file:cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              required
            />

            {/* Progress Bar */}
            {isUploading && (
              <div className="mt-4">
                <progress
                  className="progress progress-info w-full"
                  value={progress}
                  max="100"
                ></progress>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Uploading... {progress}%
                </p>
              </div>
            )}
          </div>

          {/* Desired Job Role */}
          <div>
            <label
              htmlFor="jobRole"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Desired Job Role:
            </label>
            <input
              type="text"
              id="jobRole"
              name="jobRole"
              placeholder="Enter the job role (e.g., Software Engineer)"
              className="block w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Get Optimization Tips"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ATS;
