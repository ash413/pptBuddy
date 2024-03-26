import React, { useState }  from 'react';
import './possibility.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Possibility = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('PDF uploaded successfully');

      // Once the upload is successful, redirect to the success page
      navigate('/download');
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  return (
    <div className='website__converter section__margin' id='converter'>
      <div className='website__converter-container'>
        <h1> PDF to PPT Converter</h1>
        <p>Convert your text files into powerpoint presentations here!</p>
      </div>

      <div className='website__converter-input'>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button onClick={handleUpload} disabled={!selectedFile}>
          Upload PDF
      </button>
    </div>
    </div>
  )
}

export default Possibility