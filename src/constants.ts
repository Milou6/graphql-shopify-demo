import { createStorefrontClient } from "@shopify/hydrogen-react";

export const SHOPIFY_STOREFRONT_API_URL = "https://cool-prodz21.myshopify.com/api/2025-01/graphql.json";
export const SHOPIFY_ACCESS_TOKEN = "eb7344e77560422709d0f4c7cc8361db";
export const SHOPIFY_STORE_DOMAIN = "cool-prodz21";


export const HydrogenClient = createStorefrontClient({
    // load environment variables according to your framework and runtime
    storeDomain: SHOPIFY_STOREFRONT_API_URL,
    publicStorefrontToken: SHOPIFY_ACCESS_TOKEN,
  });