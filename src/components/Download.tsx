import React, { useState } from "react";
const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Fetch your CV file from the local file system
      const response = await fetch("Resume.pdf");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Resume.pdf";
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? "Loading..." : "Download CV"}
    </button>
  );
};

export default DownloadButton;
