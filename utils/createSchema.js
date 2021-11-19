import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";

const createSchema = (schemaPath, resolvers) => {
  const typeDefs = loadSchemaSync(join(__dirname, schemaPath), {
    loaders: [new GraphQLFileLoader()]
  });

  const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  return executableSchema;
};

export default createSchema;
