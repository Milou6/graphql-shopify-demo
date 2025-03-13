import { AddToCartButton, useProduct } from "@shopify/hydrogen-react";
import "./DetailedProduct.scss";
import { ProductVariant } from "../__generated__/graphql";

const DetailedProduct = () => {
  const { product, variants, setSelectedVariant, selectedVariant } =
    useProduct();

  return (
    <>
      {product && (
        <div className="detailed-product">
          <div className="product-image-container">
            <img
              src={selectedVariant?.image?.url}
              alt={selectedVariant?.image?.altText as string}
            />

            {variants && variants.length > 1 && (
              <div className="variant-picker">
                {variants?.map((variant) => (
                  <button
                    key={variant?.id}
                    onClick={() =>
                      setSelectedVariant(variant as ProductVariant)
                    }
                  >
                    <img
                      src={variant?.image?.url}
                      alt={variant?.image?.altText as string}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="prod-details">
            <h5 className="title">{product.title}</h5>

            {product.description && (
              <p className="body-small">{product.description}</p>
            )}

            {variants &&
              variants.map((variant) => (
                <div className="variant-details" key={variant?.id}>
                  <div>
                    <div className="body-small">{variant?.title}</div>
                    <div className="label-medium">
                      {variant?.price?.amount} {variant?.price?.currencyCode}
                    </div>
                  </div>

                  <AddToCartButton
                    className="btn-primary"
                    variantId={variant?.id}
                  >
                    Add to cart
                  </AddToCartButton>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
