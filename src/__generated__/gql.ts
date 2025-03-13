/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query SearchPageProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.SearchPageProductsDocument,
    "\n  query SearchProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.SearchProductsDocument,
    "\n  query GetProducts {\n    products(first: 8) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 3) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          variants(first: 3) {\n            edges {\n              node {\n                id\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetProductsDocument,
    "\n  query GetLastCollection($first: Int, $sortKey: CollectionSortKeys, $reverse: Boolean) {\n  collections(first: $first, sortKey: $sortKey, reverse: $reverse) {\n    edges {\n      node {\n        description\n        id\n        image {\n          url\n          width\n          height\n          altText\n        }\n        title\n        onlineStoreUrl\n      }\n    }\n  }\n}\n  ": typeof types.GetLastCollectionDocument,
    "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      title\n      description\n      images(first: 3) {\n        nodes {\n          url\n        }\n      }\n      variants(first: 3) {\n        nodes {\n          id\n          title\n          price {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            url\n            altText\n            id\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetProductDocument,
};
const documents: Documents = {
    "\n  query SearchPageProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SearchPageProductsDocument,
    "\n  query SearchProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SearchProductsDocument,
    "\n  query GetProducts {\n    products(first: 8) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 3) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          variants(first: 3) {\n            edges {\n              node {\n                id\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetLastCollection($first: Int, $sortKey: CollectionSortKeys, $reverse: Boolean) {\n  collections(first: $first, sortKey: $sortKey, reverse: $reverse) {\n    edges {\n      node {\n        description\n        id\n        image {\n          url\n          width\n          height\n          altText\n        }\n        title\n        onlineStoreUrl\n      }\n    }\n  }\n}\n  ": types.GetLastCollectionDocument,
    "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      title\n      description\n      images(first: 3) {\n        nodes {\n          url\n        }\n      }\n      variants(first: 3) {\n        nodes {\n          id\n          title\n          price {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            url\n            altText\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchPageProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchPageProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchProducts($query: String!) {\n    products(first: 10, query: $query) {\n      edges {\n        node {\n          id\n          title\n          images(first: 1) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts {\n    products(first: 8) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 3) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          variants(first: 3) {\n            edges {\n              node {\n                id\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products(first: 8) {\n      edges {\n        node {\n          id\n          title\n          description\n          images(first: 3) {\n            edges {\n              node {\n                url\n              }\n            }\n          }\n          variants(first: 3) {\n            edges {\n              node {\n                id\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLastCollection($first: Int, $sortKey: CollectionSortKeys, $reverse: Boolean) {\n  collections(first: $first, sortKey: $sortKey, reverse: $reverse) {\n    edges {\n      node {\n        description\n        id\n        image {\n          url\n          width\n          height\n          altText\n        }\n        title\n        onlineStoreUrl\n      }\n    }\n  }\n}\n  "): (typeof documents)["\n  query GetLastCollection($first: Int, $sortKey: CollectionSortKeys, $reverse: Boolean) {\n  collections(first: $first, sortKey: $sortKey, reverse: $reverse) {\n    edges {\n      node {\n        description\n        id\n        image {\n          url\n          width\n          height\n          altText\n        }\n        title\n        onlineStoreUrl\n      }\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      title\n      description\n      images(first: 3) {\n        nodes {\n          url\n        }\n      }\n      variants(first: 3) {\n        nodes {\n          id\n          title\n          price {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            url\n            altText\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      title\n      description\n      images(first: 3) {\n        nodes {\n          url\n        }\n      }\n      variants(first: 3) {\n        nodes {\n          id\n          title\n          price {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            url\n            altText\n            id\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;