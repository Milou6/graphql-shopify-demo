import { Link } from "react-router-dom";
import "./Header.scss";
import { useCart } from "@shopify/hydrogen-react";
import ProductSearch from "./ProductSearch";

const Header = () => {
  const { lines } = useCart();
  const totalCartItems =
    lines?.reduce((sum, line) => sum + (line?.quantity || 0), 0) || 0;

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="header-logo-svg"
          src="/logo-no-background.svg"
          alt="SnowStore logo"
        />
        {/* <h4 className="rampart-one-regular logo">Shopify Store</h4> */}
      </Link>

      <ProductSearch></ProductSearch>

      <div className="links">
        <Link to="/cart" className="link cart-icon">
          <img src="/icons/cart.svg" alt="cart icon" />
          {totalCartItems > 0 && (
            <div className="cart-qty-indicator">{totalCartItems}</div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
