import { useCart } from "@shopify/hydrogen-react";
import { CartLine } from "@shopify/hydrogen-react/storefront-api-types";

import "./QuantityInput.scss";

const QuantityInput = ({
  line,
  className,
}: {
  line: Partial<CartLine>;
  className?: string;
}) => {
  const { linesRemove, linesUpdate } = useCart();

  const handleIncrease = (line: CartLine) => {
    linesUpdate([{ id: line.id, quantity: line.quantity + 1 }]);
  };

  const handleDecrease = (line: CartLine) => {
    if (line.quantity > 1) {
      linesUpdate([{ id: line.id, quantity: line.quantity - 1 }]);
    }
  };

  return (
    <div className={`quantity-input ${className}`}>
      <div className="item-qty">
        <button
          onClick={() => handleDecrease(line as CartLine)}
          disabled={(line?.quantity ?? 0) <= 1}
        >
          <img src="/icons/minus.svg" alt="decrease quantity" />
        </button>
        <div>{line?.quantity}</div>
        <button onClick={() => handleIncrease(line as CartLine)}>
          <img src="/icons/plus.svg" alt="increase quantity" />
        </button>
      </div>

      <button
        className="btn-delete"
        onClick={() => linesRemove([line.id as string])}
      >
        <img src="/icons/delete.svg" alt="remove cart item" />
      </button>
    </div>
  );
};

export default QuantityInput;
