import { Link } from "react-router-dom";
import "./Footer.scss"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Shopify Demo store. All rights
          reserved.
        </p>

        <nav className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/search" className="footer-link">
            Search
          </Link>
          <Link to="/" className="footer-link">
            Contact
          </Link>
        </nav>

        {/* Right Section - Social Media Icons */}
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="footer-icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className="footer-icon"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
