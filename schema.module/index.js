import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import {
  typeDefs as ChampionType,
  resolvers as ChampionResolver,
} from "../module/champion";

import {
  typeDefs as UserType,
  resolvers as UserResolver,
} from "../module/user";

const schema = makeExecutableSchema({
  typeDefs: [
    UserType,
    ChampionType
  ],
  resolvers: merge(
    UserResolver,
    ChampionResolver
  ),
});

export default graphqlHTTP((req, res, graphQLParams) => {
  return { schema, graphiql: true, context: { user: req.user } };
});
