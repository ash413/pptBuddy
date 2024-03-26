import React from 'react';
import axios from 'axios';

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get('/download', {
        responseType: 'blob', // Important for binary responses
      });
      
      // Create a blob URL for the PowerPoint file
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
      const url = window.URL.createObjectURL(blob);
      
      // Trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Output.pptx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading presentation:', error);
    }
  };

  return (
    <button onClick={handleDownload}>Download Presentation</button>
  );
};

export default DownloadButton;
