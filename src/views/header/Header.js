import './Header.css';
import React, { useState, useEffect } from "react";
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
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { Icon } from '@iconify/react';
import { LANGUAGES } from '../../constants/Languages';

const Header = (props) => {

  const { i18n, t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const langCode = window.localStorage.getItem('Language') ?? 'en-US';
  const [language, setLanguage] = useState(LANGUAGES.find(l => l.value === langCode));
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
    const langCodes = ["es-MX", "en-US"];
    if(!langCodes.includes(langCode)){
      setLanguage(LANGUAGES.find(l => l.value === 'en-US'));
      i18n.changeLanguage('en-US');
      window.localStorage.setItem('Language', 'en-US');
    }
  }, [])

  useEffect(()=>{
    
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    
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

  const handleOnChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang.value);
    window.localStorage.setItem('Language', lang.value);
  }

  return(
    <Navbar id="navbar" {...props} fixed="top">
      {
        (windowWidth >= 900)
        ?<Container id='desktop-navbar'>
          <Nav>
            <Link to='/' className='navbar-brand me-auto'><img src='/logo.png' alt='AEGIS SYSTEMS LOGO' width={30}/><span>AEGIS SYSTEMS</span></Link>
            {/* <NavItem>
              <NavLink className="scrollto" href='#home'>Inicio</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="scrollto" href="#about">{t("header-about")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#why-us">{t("header-why-us")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#conocenos">{t("header-meet-us")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#services">{t("header-services")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="scrollto" href="#contact-us">{t("header-contact")}</NavLink>
            </NavItem>
            <NavItem>
              <Select
                value={language}
                options={LANGUAGES}
                isSearchable={false}
                onChange={handleOnChange}
                getOptionLabel={e => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon={e.flag} />
                    <span style={{ marginLeft: 5 }}>{e.label}</span>
                  </div>
                )}
              />
            </NavItem>
          </Nav>
        </Container>
        :<Container id='mobile-navbar'>
          <NavbarBrand href="/"><img src='/logo.png' alt='AEGIS SYSTEMS LOGO' width={30}/><span>AEGIS SYSTEMS</span></NavbarBrand>
          <NavbarToggler color='#FFF' onClick={toggle} />
          <Collapse className={isOpen ? 'show' : 'hidden'} navbar>
            <div className="overlay" onClick={toggle}></div>
            <Nav className="me-auto" pills navbar>
              {/* <NavItem>
                <NavLink className='scrollto' href="#home">Inicio</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="scrollto" href="#about">{t("header-about")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#why-us">{t("header-why-us")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#conocenos">{t("header-meet-us")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#services">{t("header-services")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="scrollto" href="#contact-us">{t("header-contact")}</NavLink>
              </NavItem>
              <NavItem>
                <Select
                  value={language}
                  options={LANGUAGES}
                  isSearchable={false}
                  onChange={handleOnChange}
                  getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Icon icon={e.flag} />
                      <span style={{ marginLeft: 5 }}>{e.label}</span>
                    </div>
                  )}
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      }
    </Navbar>
  )
}

export default Header;