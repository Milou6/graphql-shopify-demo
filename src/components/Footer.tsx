import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          className="logo-svg"
          src="/logo-grayscale-transparent.svg"
          alt="SnowStore logo"
        />

        <p className="footer-text">
          At Snowstore, we’re passionate about providing high-quality snow
          sports gear for every adventure. Whether you're hitting the slopes for
          the first time or you're a seasoned pro, we’ve got the equipment and
          apparel to keep you going.
        </p>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Shopify Demo store. All rights
          reserved.
        </p>

        <nav className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/" className="footer-link">
            Contact
          </Link>
        </nav>

        <div className="footer-social">
          <a href="/">
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="footer-icon"
            />
          </a>
          <a href="/">
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className="footer-icon"
            />
          </a>
          <a href="/">
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
