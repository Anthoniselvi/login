import React from "react";
import { FaUserAlt, FaTh, FaAlignJustify } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-buttons">
        <FaTh />
        {/* <FaAlignJustify /> */}
        <FaUserAlt />
      </div>
      <div className="footer-add-button">
        <p className="plus"> + </p>
      </div>
    </div>
  );
}

export default Footer;
