import React, { useEffect, useRef, useState } from "react";
import * as UC from "@uploadcare/file-uploader";
import ReactMarkdown from "react-markdown";

import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css";
import { resume } from "@/app/action";

UC.defineComponents(UC);
const UCPK = process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY;

function ATS() {
  const [fileUUID, setFileUUID] = useState(null);
  const [text, setText] = useState("");
  const [role, setRole] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (e) => {
      const uploadedFile = e.detail.allEntries?.[0]; // Get first file
      if (uploadedFile?.status === "success" && uploadedFile?.uuid) {
        setFileUUID(uploadedFile.uuid);
        sendUUIDToFastAPI(uploadedFile.uuid);
      }
    };

    ctxProvider.addEventListener("change", handleChangeEvent);
    return () => {
      ctxProvider.removeEventListener("change", handleChangeEvent);
    };
  }, []);

  const sendUUIDToFastAPI = async (fileid) => {
    // if (!fileUUID) {
    //   alert("No file uploaded!");
    //   return;
    // }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/process-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: fileid }),
      });

      const data = await response.json();
      setText(data);
    } catch (error) {
      console.error("Error sending UUID:", error);
    }
  };

  const handleSubmit = async (event) => {
    setIsloading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("parsedText", text);
    formData.append("role", role);

    setResult("");
    setError("");
    try {
      const response = await resume(formData);
      if (response.error) {
        setError(response.error);
        setIsloading(false);
      } else {
        setResult(response.result);
        setIsloading(false);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setIsloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100">
      <form
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border border-gray-200 transform transition-all hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
          Optimize Your Resume
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base leading-relaxed">
          Upload your resume and enter the desired job role to get personalized,
          ATS-friendly optimization tips.
        </p>

        <div className="space-y-6">
          {/* Upload Your Resume */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Your Resume:
            </label>
            <uc-config
              ctx-name="my-uploader-1"
              pubkey={UCPK}
              multiple="false"
            ></uc-config>
            <uc-file-uploader-minimal
              ctx-name="my-uploader-1"
              class="uc-light"
            ></uc-file-uploader-minimal>
            <uc-upload-ctx-provider
              ctx-name="my-uploader-1"
              ref={ctxProviderRef}
            ></uc-upload-ctx-provider>
          </div>

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
              onChange={(e) => setRole(e.target.value)}
              value={role}
              required
            />
          </div>
          {result && (
            <div className="p-4 bg-gray-100 border rounded-lg text-gray-800">
              <p className="font-semibold">Resume:</p>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl"
            disabled={isloading}
          >
            {isloading ? <span className="loading loading-spinner loading-lg"></span> : <span>Genrate Optimization Tips</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ATS;
