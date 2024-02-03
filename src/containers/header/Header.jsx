import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='website__header section__padding' id='home'>
      <div className='website__header-content'>
        <h1 className='gradient__text'>
          Lets Buid Something Amazing With PPTBuddy!
        </h1>
        <p>Welcome to PPTBuddy.com, your go-to destination for seamless document transformation. 
          We understand the power of impactful presentations, and that's why we've created a space 
          where you can effortlessly convert your PDFs into dynamic, engaging PowerPoint presentations. 
          PPTBuddy is more than just a converter; it's your ally in crafting compelling narratives.</p>
        <div className='website__header-content__input'>
          <input type="email" placeholder='Your email address' name="" id="" />
          <button type='button' onClick="">Get Started</button>
        </div>
        <div className='website__header-content__people'>
          <img src={people} alt="people" />
          <p>1600 people requested access!</p>
        </div>
      </div>
      <div className='website__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header