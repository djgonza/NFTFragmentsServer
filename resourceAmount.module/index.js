import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { join } from "path";
import loadSchema from "../utils/loadSchema";
import resolvers from "./resolvers";

const typeDefs = loadSchema(join(__dirname, "./schema/schema.graphql"));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// export default graphqlHTTP((req, res, graphQLParams) => {
//   return { schema, graphiql: true, context: { user: req.user } };
// });

export { schema, typeDefs, resolvers };
