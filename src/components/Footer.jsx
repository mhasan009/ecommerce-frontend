import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="footer__container">
        <div className="footer__brand">
          <h3 id="footer-heading" className="footer__title">
            e-Shop
          </h3>
          <p className="footer__description">
            Your one-stop destination for everything you need. Shop with us and
            enjoy a seamless online shopping experience.
          </p>
        </div>

        <div className="footer__links-section">
          <h4 className="footer__subtitle">Quick Links</h4>
          <ul
            className="footer__links-list"
            role="navigation"
            aria-label="Footer navigation"
          >
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="footer__link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__social-section">
          <h4 className="footer__subtitle">Follow us</h4>

          <div
            className="footer__social-icons"
            role="navigation"
            aria-label="Social media links"
          >
            <a
              href="#"
              className="footer__social-link"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Visit our Twitter page"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Visit our GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin />
            </a>
          </div>

          <form
            className="footer__newsletter"
            aria-label="Newsletter subscription form"
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="footer__input"
              aria-label="Enter your email for newsletter subscription"
            />
            <button
              type="submit"
              className="footer__subscribe-button"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} e-Shop All rights reserved.
          </p>

          <div
            className="footer__legal-links"
            role="navigation"
            aria-label="Legal links"
          >
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__legal-link">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
