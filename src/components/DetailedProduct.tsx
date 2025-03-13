import { AddToCartButton, useProduct } from "@shopify/hydrogen-react";
import "./DetailedProduct.scss";

const DetailedProduct = () => {
  const { product, variants, setSelectedVariant, selectedVariant } =
    useProduct();

  //   console.log(product);
  console.log(variants);

  return (
    <>
      {product && (
        <div className="detailed-product">
          <div className="product-image-container">
            <img
              src={selectedVariant?.image?.url}
              alt={selectedVariant?.image?.altText}
            />

            {variants && variants.length > 1 && (
              <div className="variant-picker">
                {variants?.map((variant) => (
                  <button
                    key={variant?.id}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    <img
                      src={variant?.image?.url}
                      alt={variant?.image?.altText}
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

                  <AddToCartButton variantId={variant?.id}>
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
