import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="custom_container">
        {/* Top Footer */}
        <div className="row">
          {/* Brand & Social */}
          <div className="col-lg-4 col-md-12 mb-4 footer-brand">
            <h3 className="logo">
              Re<span className="footer-logo-one">design</span>
              <span className="footer-logo-two fw-normal">HUB</span>
            </h3>
            <p className="footer-custom-p">Remodel as easy as 1,2,3</p>
            <div className="social-icons mb-2">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaPinterestP />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Concierge Service</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h4>Connect</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Workspace</a>
              </li>
              <li>
                <a href="#">Claim Business</a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h4>Company Info</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom  text-center">
          <p>Copyright © 2025 ReDesignHub.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
