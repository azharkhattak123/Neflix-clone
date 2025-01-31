import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import hamberger from "../../assets/hamberger.svg";
import times from "../../assets/times.svg";

const Navbar = () => {
  const navRef = useRef();
  const mobNavRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 140) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar_left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My list</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className="navbar_right">
          <img src={search_icon} alt="" className="search" />
          <p>Children</p>
          <img src={bell_icon} alt="" className="search" />

          <div className="navbar_profile">
            <img src={profile_img} alt="" className="profile_img" />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p onClick={logout}>Log Out from Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
