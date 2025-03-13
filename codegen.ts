import { CodegenConfig } from '@graphql-codegen/cli';
import {SHOPIFY_ACCESS_TOKEN, SHOPIFY_STOREFRONT_API_URL} from './src/constants';

const config: CodegenConfig = {
  schema: [
    {
      [SHOPIFY_STOREFRONT_API_URL]: {
        headers: {
          "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN
        }
      }
    }
  ]
  , 
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  }
  // ignoreNoDocuments: true // run even if no queries found in FE
};

export default config;
