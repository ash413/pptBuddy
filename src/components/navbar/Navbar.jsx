import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wwebsite">What is PPTBuddy?</a></p>
  <p><a href="#converter">Converter</a></p>
  <p><a href="#features">Case Studies</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='website__navbar'>
      <div className='website__navbar-links'>
        <div className='website__navbar-links_logo'>
          <h1>PPTBUDDY</h1>
        </div>
        <div className='website__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='website__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='website__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='website__navbar-menu_container scale-up-center'>
            <div className='website__navbar-menu_container-links'>
              <Menu />
              <div className='website__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar