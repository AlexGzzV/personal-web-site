import './Header.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  useEffect(()=>{
    /**
       * Easy on scroll event listener 
       */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 57;
      navbarlinks.forEach(navbarlink => {
        navbarlink.addEventListener('click', e => {scrollTo(e)})
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })

      if(window.scrollY < 200){
        document.getElementById('navbar').classList.add('transparent');
      }else{
        document.getElementById('navbar').classList.remove('transparent');
      }
    }

    const windowResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    }

    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
    window.addEventListener('resize', windowResize);



    return(()=>{
      window.removeEventListener('load', navbarlinksActive);
      document.removeEventListener('scroll', navbarlinksActive);
      window.removeEventListener('resize', windowResize);

      let navbarlinks = select('#navbar .scrollto', true);
      navbarlinks.forEach(navbarlink => {
        navbarlink.removeEventListener('click', scrollTo);
      });
    })
  },[]);

  const scrollTo = (e) => {
    e.preventDefault();
    const scroll = document.getElementById(e.target.getAttribute('href').replace('#', '')).offsetTop;
    window.scrollTo(0, scroll - 56);
  }

  return(
    <Navbar id="navbar" className='transparent' {...props} fixed="top">
      {
        (windowWidth >= 900)
        ?<Container id='desktop-navbar'>
          <Nav>
            <Link to='/' className='navbar-brand me-auto'><img src='/logo.png' width={50}/><span>AEGIS SYSTEMS</span></Link>
            <NavItem>
              <NavLink className="scrollto" href='#home'>Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#about">Quiénes somos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#conocenos">Conocenos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#why-us">¿Por qué nosotros?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#paquetes">Paquetes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#contact-us">Contáctanos</NavLink>
            </NavItem>
          </Nav>
        </Container>
        :<Container id='mobile-navbar'>
          <NavbarBrand href="/"><img src='/logo.png' width={50}/><span>AEGIS SYSTEMS</span></NavbarBrand>
          <NavbarToggler color='#FFF' onClick={toggle} />
          <Collapse className={isOpen ? 'show' : 'hidden'} navbar>
            <div className="overlay" onClick={toggle}></div>
            <Nav className="me-auto" pills navbar>
              <NavItem>
                <NavLink className='scrollto' href="#home">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#about">Quiénes somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#conocenos">Conocenos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#why-us">Por qué nosotros?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#paquetes">Paquetes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#contact-us">Contáctanos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      }
    </Navbar>
  )
}

export default Header;