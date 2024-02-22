import './Header.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Col,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
      let position = window.scrollY + 43;
      navbarlinks.forEach(navbarlink => {
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
    })
  },[]);

  return(
    <Navbar id="navbar" className='transparent' {...props} fixed="top">
      {
        (windowWidth >= 900)
        ?<Container id='desktop-navbar'>
          <Nav>
            <Link to='/' className='navbar-brand me-auto'>{/*<img src='/LOGOTIPO2.png' width={30}/>*/}<span>ATG SOLUTIONS</span></Link>
            <NavItem>
              <NavLink className="scrollto" href='#home'>Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#about">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#services">Servicios</NavLink>
            </NavItem>
          </Nav>
        </Container>
        :<Container id='mobile-navbar'>
          <NavbarBrand href="/">{/*<img src='/LOGOTIPO2.png' width={30}/>*/}<span>ATG SOLUTIONS</span></NavbarBrand>
          <NavbarToggler color='#FFF' onClick={toggle} />
          <Collapse className={isOpen ? 'show' : 'hidden'} navbar>
            <Nav className="me-auto" pills navbar>
              <NavItem>
                <NavLink className='scrollto' href="#home">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#about">Nosotros</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#services">Servicios</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Container>
      }
    </Navbar>
  )
}

export default Header;