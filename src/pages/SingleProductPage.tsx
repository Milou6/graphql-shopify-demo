import { gql, useQuery } from "@apollo/client";
import { ProductProvider } from "@shopify/hydrogen-react";
import { useParams } from "react-router-dom";
import { GetProductQuery } from "../__generated__/graphql";
import DetailedProduct from "../components/DetailedProduct";

const GET_PRODUCT_BY_ID = gql(`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
      images(first: 3) {
        nodes {
          url
        }
      }
      variants(first: 3) {
        nodes {
          id
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
            id
          }
        }
      }
    }
  }
`);

const SingleProductPage = () => {
  const { productId } = useParams();
  const globalProductId = `gid://shopify/Product/${productId}`;

  const { data } = useQuery<GetProductQuery>(GET_PRODUCT_BY_ID, {
    variables: { id: globalProductId },
  });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const product = data?.product;
  // console.log(product);

  return (
    <div className="centered-page">
      {product && (
        <ProductProvider key={product.id} data={product}>
          <DetailedProduct></DetailedProduct>
        </ProductProvider>
      )}
    </div>
  );
};

export default SingleProductPage;
