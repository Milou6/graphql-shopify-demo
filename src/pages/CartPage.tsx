import { parseGid, useCart } from "@shopify/hydrogen-react";
import { CartLine } from "@shopify/hydrogen-react/storefront-api-types";
import { Link } from "react-router-dom";

import "./CartPage.scss";
import QuantityInput from "../components/QuantityInput";

const CartPage = () => {
  const { lines, cost, checkoutUrl } = useCart();
  console.log(lines);

  return (
    <div className="centered-page cart-page">
      {/* <h1>Your cart</h1>
      <h2>Your cart</h2>
      <h3>Your cart</h3>
      <h4>Your cart</h4>
      <h5>Your cart</h5>
      <h6>Your cart</h6>
      <div className="title-large">Title Text</div>
      <div className="title-medium">Title Text</div>
      <div className="title-small">Title Text</div>
      <div className="body-large">Body Text</div>
      <div className="body-medium">Body Text</div>
      <div className="body-small">Body Text</div>
      <div className="label-large">Label Text</div>
      <div className="label-medium">Label Text</div>
      <div className="label-small">Label Text</div> */}

      <div className="cart-header">
        <h3 className="title">Your Cart</h3>
        <Link className="label-large" to="/">
          Continue shopping
        </Link>
      </div>

      {/* empty cart */}
      {lines && lines.length === 0 && <p>Your cart is empty.</p>}

      {/* non-empty cart */}
      {lines && lines.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <div className="label-large">Product</div>
              </th>
              <th className="desktop-only">
                <div className="label-large">Quantity</div>
              </th>
              <th>
                <div className="label-large">Total</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {lines.map((line) => (
              <tr key={line?.id}>
                <td className="td-img">
                  <div>
                    <img
                      src={line?.merchandise?.image?.url}
                      alt={line?.merchandise?.title}
                      width={50}
                    />

                    <div>
                      <Link
                        className="body-small text-link"
                        to={`/product/${
                          parseGid(line?.merchandise?.product?.id).id
                        }`}
                      >
                        {line?.merchandise?.title}
                      </Link>
                      <div className="label-small">
                        {line?.merchandise?.price?.amount}{" "}
                        {line?.merchandise?.price?.currencyCode}
                      </div>
                      <QuantityInput
                        className="mobile-only"
                        line={line as CartLine}
                      ></QuantityInput>
                    </div>
                  </div>
                </td>

                <td className="td-quantity desktop-only">
                  <QuantityInput line={line as CartLine}></QuantityInput>
                </td>

                <td className="td-subtotal label-large">
                  {line?.cost?.totalAmount?.amount}{" "}
                  {line?.merchandise?.price?.currencyCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Cart Total & Checkout */}
      {lines && lines.length > 0 && (
        <div className="cart-footer">
          <div className="body-large">
            Total {cost?.totalAmount?.amount} {cost?.totalAmount?.currencyCode}
          </div>

          <div className="label-medium">
            Taxes and shipping calculated at checkout
          </div>

          {checkoutUrl && (
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Check Out</button>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
