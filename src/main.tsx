import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import {
  SHOPIFY_ACCESS_TOKEN,
  SHOPIFY_STOREFRONT_API_URL,
} from "./constants.ts";
import Pages from "./pages/index.tsx";

import "./CSS/global.scss";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";

const httpLink = createHttpLink({
  uri: SHOPIFY_STOREFRONT_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ShopifyProvider
        storeDomain="https://cool-prodz21.myshopify.com"
        storefrontToken={SHOPIFY_ACCESS_TOKEN}
        storefrontApiVersion="2025-01"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <CartProvider
          onLineAdd={() => {
            console.log("a line is being added");
          }}
          onLineAddComplete={() => {
            console.log("a line has been added");
          }}
        >
          <Pages />
        </CartProvider>
      </ShopifyProvider>
    </ApolloProvider>
  </StrictMode>
);
