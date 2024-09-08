import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        
        <div className="social-links">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
          <p>
          &copy; 2024   CodeInspire Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Surendra</a>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
