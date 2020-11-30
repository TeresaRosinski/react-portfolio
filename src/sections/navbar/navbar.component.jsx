import React from 'react'
import './navbar.styles.scss'
import Logo from './logo_transparent.png'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = ({ sticky }) => (
  <div className='nav'>
    <nav className={sticky ? 'navbar navbar-sticky' : 'navbar'}>
      <div className='navbar--logo-holder'>
        <img src={Logo} alt='logo' className='navbar--logo' onClick={scroll.scrollToTop} />
      </div>
      <label id="hamburger" for='toggle'>&#9776;</label>
      <input type='checkbox' id='toggle' />
      <ul className='main-nav'>
        <li><Link
          activeClass='active'
          to='projects-section'
          spy
          smooth
          offset={-70}
          duration={500}
            >
          PROJECTS
        </Link>
        </li>
        <li> <Link
          activeClass='active'
          to='workexperience-section'
          spy
          smooth
          offset={-70}
          duration={500}
             >
          WORK HISTORY
        </Link>
        </li>
        <li> <Link
          activeClass='active'
          to='education-section'
          spy
          smooth
          offset={-70}
          duration={500}
             >
          EDUCATION
        </Link>
        </li>
      </ul>

    </nav>
  </div>
)

export default Navbar
