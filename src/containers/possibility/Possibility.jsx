import React from 'react';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='website__converter section__margin' id='converter'>
      <div className='website__converter-container'>
        <h1> PDF to PPT Converter</h1>
        <p>Convert your text files into powerpoint presentations here!</p>
      </div>
      <div className='website__converter-input'>
        <form action = "/upload" method = "post" enctype="multipart/form-data">   
          <input className='website__converter-files' type="file" name="file" />   
          <input className='website__converter-submits' type = "submit" value="Upload" /> 
        </form> 
      </div>
    </div>
  )
}

export default Possibility