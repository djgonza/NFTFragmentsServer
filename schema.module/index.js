import { graphqlHTTP } from "express-graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

// import { schema as MasterSchema } from "../master.module";
// import { schema as ResourceSchema } from "../resource.module";
// import { schema as ResourceAmountSchema } from "../resourceAmount.module";
// import { schema as LandSchema } from "../land.module";
// import { schema as MachineSchema } from "../machine.module";
// import { schema as MachineLandSchema } from "../machineLand.module";

// const schema = stitchSchemas({
//   subschemas: [
//     MasterSchema,
//     ResourceSchema,
//     ResourceAmountSchema,
//     //LandSchema,
//     MachineSchema,
//     MachineLandSchema,
//   ],
// });

/* Masters */
import {
  typeDefs as MasterResourceType,
  resolvers as MasterResourceResolver,
} from "../master.module/resource";
import {
  typeDefs as MasterResourceAmountType,
  resolvers as MasterResourceAmountResolver,
} from "../master.module/resourceAmount";
import {
  typeDefs as MasterResourceMinMaxType,
  resolvers as MasterResourceMinMaxResolver,
} from "../master.module/resourcesMinMax";
import {
  typeDefs as MasterLandType,
  resolvers as MasterLandResolver,
} from "../master.module/land";
import {
  typeDefs as MasterMachineType,
  resolvers as MasterMachineResolver,
} from "../master.module/machine";
import {
  typeDefs as MasterRecipeType,
  resolvers as MasterRecipeResolver,
} from "../master.module/recipe";
import {
  typeDefs as MasterMachineRecipeType,
  resolvers as MasterMachineRecipeResolver,
} from "../master.module/machineRecipe";

/* End masters */

import {
  typeDefs as ResourceType,
  resolvers as ResourceResolver,
} from "../resource.module";
import {
  typeDefs as ResourceAmountType,
  resolvers as ResourceAmountResolver,
} from "../resourceAmount.module";
import {
  typeDefs as LandType,
  resolvers as LandResolver,
} from "../land.module";
import {
  typeDefs as MachineType,
  resolvers as MachineResolver,
} from "../machine.module";
import {
  typeDefs as MachineLandType,
  resolvers as MachineLandResolver,
} from "../machineLand.module";

const schema = makeExecutableSchema({
  typeDefs: [
    MasterResourceType,
    MasterResourceAmountType,
    MasterResourceMinMaxType,
    MasterLandType,
    MasterMachineType,
    MasterRecipeType,
    MasterMachineRecipeType,
    ResourceType,
    ResourceAmountType,
    LandType,
    MachineType,
    MachineLandType,
  ],
  resolvers: merge(
    MasterResourceResolver,
    MasterResourceAmountResolver,
    MasterResourceMinMaxResolver,
    MasterLandResolver,
    MasterMachineResolver,
    MasterRecipeResolver,
    MasterMachineRecipeResolver,
    ResourceResolver,
    ResourceAmountResolver,
    LandResolver,
    MachineResolver,
    MachineLandResolver
  ),
});

export default graphqlHTTP((req, res, graphQLParams) => {
  return { schema, graphiql: true, context: { user: req.user } };
});
