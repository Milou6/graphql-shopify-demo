import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

// GraphQL query for searching products
const SEARCH_PRODUCTS_QUERY = gql(`
  query SearchPageProducts($query: String!) {
    products(first: 10, query: $query) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`);

const ProductPageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce input to limit API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Apollo Client query (fetches only when there's a search term)
  const { data, loading, error } = useQuery(SEARCH_PRODUCTS_QUERY, {
    variables: {
      query: debouncedSearchTerm ? `title:*${debouncedSearchTerm}*` : "",
    },
    skip: !debouncedSearchTerm, // Prevents unnecessary API calls
  });

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div>
        {data?.products.edges.length > 0 ? (
          data.products.edges.map(({ node }) => (
            <div
              key={node.id}
              style={{ borderBottom: "1px solid #ddd", padding: "10px" }}
            >
              <h3>{node.title}</h3>
              <p>{node.description}</p>
              {node.images.edges.length > 0 && (
                <img
                  src={node.images.edges[0].node.url}
                  alt={node.title}
                  width={100}
                />
              )}
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPageSearch;
