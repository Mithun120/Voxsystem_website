import React, { useEffect, useState } from 'react';
import {NavLink,Link} from 'react-router-dom'
import '../style/nav.css';
import logo from "../assets/vs.png"
const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} onClick={e => e.stopPropagation()}>
        <div className='nav-container'>
        <div className='nav-logo'>
            <a href='/'><img  className='logo' src={logo}></img></a>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                >
                Contact Us
              </NavLink>
            </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
            {click ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>}
          </div>
        </div>
    </nav>
    {/* <img className='bg-img' src="https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-2560x1440-8324.png"></img> */}
    </div>
  );
};

export default Navbar;
