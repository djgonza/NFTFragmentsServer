// import { merge } from "lodash";
// import { graphqlHTTP } from "express-graphql";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// import { typeDefs as Machine, resolvers as MachineResolver } from "./machine";
// import {
//   typeDefs as Resource,
//   resolvers as ResourceResolver,
// } from "./resource";

// import {
//   typeDefs as ResourceMinMax,
//   resolvers as ResourceMinMaxResolver,
// } from "./resourcesMinMax";

// import {
//   typeDefs as ResourceAmount,
//   resolvers as ResourceAmountResolver,
// } from "./resourceAmount";

// import { typeDefs as Recipe, resolvers as RecipeResolver } from "./recipe";
// import { typeDefs as MasterLand, resolvers as MasterLandResolver } from "./land";

// import {
//   typeDefs as Land,
//   resolvers as LandResolver,
// } from "../land.module";


// const schema = makeExecutableSchema({
//   typeDefs: [Resource, ResourceMinMax, ResourceAmount, Machine, Recipe, MasterLand, Land],
//   resolvers: merge(
//     ResourceResolver,
//     ResourceMinMaxResolver,
//     ResourceAmountResolver,
//     MachineResolver,
//     RecipeResolver,
//     MasterLandResolver,
//     LandResolver
//   ),
// });

// export default graphqlHTTP((req, res, graphQLParams) => {
//   return { schema, graphiql: true, context: { user: req.user } };
// });

// export { schema };
