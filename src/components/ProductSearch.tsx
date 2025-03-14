import { gql, useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import "./ProductSearch.scss";
import { Link } from "react-router-dom";
import { parseGid } from "@shopify/hydrogen-react";
import { SearchProductsQuery } from "../__generated__/graphql";

const SEARCH_PRODUCTS_QUERY = gql(`
  query SearchProducts($query: String!) {
    products(first: 10, query: $query) {
      edges {
        node {
          id
          title
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`);

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [debouncedSearchTerm]);

  const { data, loading, error } = useQuery<SearchProductsQuery>(
    SEARCH_PRODUCTS_QUERY,
    {
      variables: {
        query: debouncedSearchTerm ? `title:*${debouncedSearchTerm}*` : "",
      },
      skip: !debouncedSearchTerm,
    }
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {isOpen && (
        <div className="search-modal" ref={modalRef}>
          <div className="search-modal-content">
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">Error: {error.message}</p>}

            {data && data.products.edges.length > 0 ? (
              data.products.edges.map(({ node }) => (
                <Link
                  to={`/product/${parseGid(node.id).id}`}
                  key={node.id}
                  onClick={() => setIsOpen(false)}
                  className="search-item-link"
                >
                  <div className="search-item">
                    <div className="search-item-content">
                      {node.images.edges.length > 0 && (
                        <img
                          src={node.images.edges[0].node.url}
                          alt={node.title}
                          className="search-item-image"
                        />
                      )}
                      <div>
                        <h3 className="search-item-title label-large">
                          {node.title}
                        </h3>
                        <p className="search-item-description label-medium">
                          {node.priceRange.minVariantPrice.amount}{" "}
                          {node.priceRange.minVariantPrice.currencyCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-results">No products found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
