import { useCart } from "@shopify/hydrogen-react";
import { useState } from "react";

const CartSidebar = () => {
  const { lines, cost, checkoutUrl, linesRemove } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cart Icon Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.cartButton}>
        🛒 Cart ({lines.length})
      </button>

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, right: isOpen ? "0" : "-300px" }}>
        <h2>Shopping Cart</h2>
        <button onClick={() => setIsOpen(false)} style={styles.closeButton}>
          ✖
        </button>

        {lines && lines.length === 0 && <p>Your cart is empty.</p>}

        {lines && lines.length > 0 && (
          <ul>
            {lines.map((line) => (
              <li key={line.id} style={styles.cartItem}>
                <img
                  src={line.merchandise.image?.url}
                  alt={line.merchandise.title}
                  width={50}
                />
                <div>
                  <p>{line.merchandise.title}</p>
                  <p>
                    {line.quantity} x {line.merchandise.price.amount}{" "}
                    {line.merchandise.price.currencyCode}
                  </p>
                  <button
                    onClick={() => linesRemove(line.id)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Cart Total & Checkout */}
        <p style={styles.total}>
          Total: {cost?.totalAmount?.amount} {cost?.totalAmount?.currencyCode}
        </p>
        {checkoutUrl && (
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <button style={styles.checkoutButton}>Go to Checkout</button>
          </a>
        )}
      </div>
    </>
  );
};

// Styles
const styles = {
  cartButton: {
    position: "fixed",
    top: "80px",
    right: "20px",
    background: "black",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
  sidebar: {
    position: "fixed",
    top: "0",
    right: "-300px",
    width: "300px",
    height: "100%",
    background: "white",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
    padding: "20px",
    transition: "right 0.3s ease-in-out",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  removeButton: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  total: {
    fontWeight: "bold",
    marginTop: "20px",
  },
  checkoutButton: {
    width: "100%",
    background: "black",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
};

export default CartSidebar;
