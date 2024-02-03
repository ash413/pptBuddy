import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='website__footer section__padding'>
      <div className='website__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others?
        </h1>
      </div>
      <div className='website__footer-btn'>
        <b>Request Early Access</b>
      </div>
      <div className='website__footer-links'>
        <div className='website__footer-links_logo'>
          <h1>PPTBUDDY</h1>
          <p>Addresss</p>
        </div>
        <div className='website__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='website__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='website__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Adressss</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
      <div className='website__footer-copyright'>
        <p>© 2024 PPTBUDDY. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer