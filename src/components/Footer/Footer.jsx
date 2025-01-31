import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preference</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        <li>Media Centre</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p>© 1997-2024 Netflix Inc.</p>
    </div>
  );
};

export default Footer;
