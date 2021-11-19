import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const loadSchema = schemaPath => {
  const typeDefs = loadSchemaSync(schemaPath, {
    loaders: [new GraphQLFileLoader()]
  });

  return typeDefs;
};

export default loadSchema;
