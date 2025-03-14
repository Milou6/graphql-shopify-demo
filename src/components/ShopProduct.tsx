import { parseGid, useProduct } from "@shopify/hydrogen-react";
import { Link } from "react-router-dom";

import { Image } from "../__generated__/graphql";
import "./ShopProduct.scss";

function ShopProduct() {
  const { product, variants } = useProduct();
  const { id: productId } = parseGid(product?.id);

  const img1: Image | undefined = product?.images?.edges?.[0]?.node as
    | Image
    | undefined;

  return (
    <div className="shop-product">
      <Link to={`/product/${productId}`}>
        <img key={img1?.url} src={img1?.url} alt={product?.title} />

        <div className="prod-title label-large">{product?.title}</div>

        {variants && variants[0] && (
          <div className="prod-price label-small">
            {variants[0]?.price?.amount} {variants[0].price?.currencyCode}
          </div>
        )}
      </Link>
    </div>
  );
}

function ShopProductPlaceholder() {
  return (
    <div className="product-skeleton">
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-price" />
    </div>
  );
}

export { ShopProduct, ShopProductPlaceholder };
