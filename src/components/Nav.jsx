import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/nddirect logo.png";

const Nav = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavDivsClasses = () => {
    const navItems = document.querySelector(".navLinks");
    navItems.classList.toggle("hidden");
    const mainNav = document.querySelector(".mainNav");
    mainNav.classList.toggle("h-full");
  };

  const handleMenuState = () => {
    setCloseMenu(!closeMenu);
    toggleNavDivsClasses();
  };

  // Highlight on click
  const handleActive = (e) => {
    const navLinks = document.querySelectorAll(".navLink");
    navLinks.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
    handleMenuState();
  };

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navLink");
const hero = document.querySelector("#home"); // HeroSection must have id="hero"

    const onScroll = () => {
      // Background change
      if (window.innerWidth > 767 && hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setScrolled(window.scrollY > heroBottom - 80); // adjust offset as needed
    } else {
      setScrolled(true);
    }
  


      // Scroll spy
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Inline CSS for active state */}
      <style>{`
        .navLink.active {
          color: #ef9c33;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: #ef9c33;
        }
      `}</style>

      <nav
  className={`mainNav fixed top-0 w-full md:h-fit z-20 p-4 transition-colors duration-300 ${
    scrolled ? "bg-[#211a44] shadow-lg" : "bg-transparent"
  } md:flex justify-between`}
  id="nav"
>


        <div className="flex justify-between items-center text-[#f0ede8] text-lg">
          <Link to="/" className="flex gap-2 outline-none  items-center">
            <img src={logo} alt="ND Direct Marketing Logo" className="h-[25px] block"/>
            <span className="text-xs leading-none tracking-wide block">ND Direct <br/> Marketing</span></Link>
          <div className="md:hidden text-3xl pr-3 cursor-pointer">
            {closeMenu ? (
              <RxHamburgerMenu
                onClick={handleMenuState}
                className="text-[#f0ede8]"
              />
            ) : (
              <RxCross1 onClick={handleMenuState} className="text-[#f0ede8]" />
            )}
          </div>
        </div>

        <div className="hidden navLinks flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 text-xl md:text-base md:flex md:space-x-4 text-center capitalize space-y-3 md:space-y-0 py-10 md:py-0 translate-y-[25%] md:translate-y-0">
          <a
            href="#home"
            className="navLink text-[#f0ede8] hover:underline underline-offset-4 decoration-[#ef9c33] decoration-2 font-thin transition-all duration-300 active"
            onClick={handleActive}
          >
            Home
          </a>

          <a
            href="#about"
            className="navLink text-[#f0ede8] hover:underline underline-offset-4 decoration-[#ef9c33] decoration-2 font-thin transition-all duration-300"
            onClick={handleActive}
          >
            About Us
          </a>
          
          <a
            href="#services"
            className="navLink text-[#f0ede8] hover:underline underline-offset-4 decoration-[#ef9c33] decoration-2 font-thin transition-all duration-300"
            onClick={handleActive}
          >
            Services
          </a>
          
          <a
            href="#contacts"
            className="navLink text-[#f0ede8] hover:underline underline-offset-4 decoration-[#ef9c33] decoration-2 font-thin transition-all duration-300"
            onClick={handleActive}
          >
            Contact Us
          </a>
          {/* <a
            href="mailto:info@parwendo.co.za?subject=Online Booking: Chauffeur Services"
            className="navLink hover:text-[#143429] text-[#f0ede8] text-sm font-semibold bg-[#ef9c33] rounded-full px-4 py-2"
            onClick={handleMenuState}
          >
            Book Online
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;