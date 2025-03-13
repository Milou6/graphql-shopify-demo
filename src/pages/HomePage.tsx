import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import QueryResult from "../components/QueryResult";
import { ProductProvider } from "@shopify/hydrogen-react";
import ShopProduct from "../components/ShopProduct";

import "./HomePage.scss";
import {
  GetLastCollectionQuery,
  GetProductsQuery,
} from "../__generated__/graphql";

const GET_PRODUCTS = gql(`
  query GetProducts {
    products(first: 8) {
      edges {
        node {
          id
          title
          description
          images(first: 3) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 3) {
            edges {
              node {
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
              }
            }
          }
        }
      }
    }
  }
`);

const GET_LATEST_COLLECTION = gql(`
  query GetLastCollection($first: Int, $sortKey: CollectionSortKeys, $reverse: Boolean) {
  collections(first: $first, sortKey: $sortKey, reverse: $reverse) {
    edges {
      node {
        description
        id
        image {
          url
          width
          height
          altText
        }
        title
        onlineStoreUrl
      }
    }
  }
}
  `);

function HomePage() {
  const { loading, error, data } = useQuery<GetProductsQuery>(GET_PRODUCTS);

  const { data: lastCollectionData } = useQuery<GetLastCollectionQuery>(
    GET_LATEST_COLLECTION,
    {
      variables: {
        first: 1,
        sortKey: "UPDATED_AT",
        reverse: true,
      },
    }
  );
  const lastCollection = lastCollectionData?.collections.edges[0].node;
  // console.log(data);

  return (
    <div className="centered-page">
      <h3 className="rampart-one-regular display-small">Our Latest Articles</h3>

      <div className="grid-products">
        {data?.products &&
          data?.products.edges.map(({ node: product }) => (
            <QueryResult
              key={product.id}
              error={error}
              loading={loading}
              data={data}
            >
              <ProductProvider
                key={product.id}
                data={product}
                initialVariantId={product.variants.edges[0].node.id}
              >
                <ShopProduct />
              </ProductProvider>
            </QueryResult>
          ))}
      </div>

      <h3 className="rampart-one-regular">Featured Collection</h3>

      {lastCollection && (
        <div
          className="latest-collection"
          style={{
            backgroundImage: `url(${lastCollection.image?.url})`,
          }}
        >
          <h6 className="title">{lastCollection.title}</h6>
          <p className="body-small description">{lastCollection.description}</p>
          {/* <img
            src={lastCollectionData.collections.edges[0].node.image?.url}
            alt=""
          /> */}
        </div>
      )}
    </div>
  );
}

export default HomePage;
