import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/__generated__/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
  schema: "http://[::1]:3000/graphql",
  documents: ["src/**/*.gql.ts"],
  ignoreNoDocuments: true,
};

export default config;
