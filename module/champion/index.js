import { makeExecutableSchema } from "@graphql-tools/schema";
import { join } from "path";
import loadSchema from "../../utils/loadSchema";
import resolvers from "./resolver";

const typeDefs = loadSchema(join(__dirname, "./schema/schema.graphql"));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema, typeDefs, resolvers };
