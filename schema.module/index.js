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
  typeDefs as MasterLandType,
  resolvers as MasterLandResolver,
} from "../master.module/land";
import {
  typeDefs as MasterMachineType,
  resolvers as MasterMachineResolver,
} from "../master.module/machine";
import {
  typeDefs as MasterMachineRecipeType,
  resolvers as MasterMachineRecipeResolver,
} from "../master.module/machineRecipe";
import {
  typeDefs as MasterTechnologyType,
  resolvers as MasterTechnologyResolver,
} from "../master.module/technology";

import {
  typeDefs as MasterPartType,
  resolvers as MasterPartResolver,
} from "../master.module/part";

import {
  typeDefs as MasterPartRecipeType,
  resolvers as MasterPartRecipeResolver,
} from "../master.module/partRecipe";

import {
  typeDefs as MasterBlueprintType,
  resolvers as MasterBlueprintResolver,
} from "../master.module/blueprint";

/* End masters */

import {
  typeDefs as EnergyType,
  resolvers as EnergyResolver,
} from "../energy.module";
import {
  typeDefs as ResourceType,
  resolvers as ResourceResolver,
} from "../resource.module";
import {
  typeDefs as PartType,
  resolvers as PartResolver,
} from "../part.module";
import {
  typeDefs as LandType,
  resolvers as LandResolver,
} from "../land.module";
import {
  typeDefs as MachineType,
  resolvers as MachineResolver,
} from "../machine.module";
import {
  typeDefs as TechnologyType,
  resolvers as TechnologyResolver,
} from "../technology.module";

const schema = makeExecutableSchema({
  typeDefs: [
    MasterResourceType,
    MasterLandType,
    MasterMachineType,
    MasterMachineRecipeType,
    MasterTechnologyType,
    MasterPartType,
    MasterPartRecipeType,
    MasterBlueprintType,
    EnergyType,
    ResourceType,
    PartType,
    LandType,
    MachineType,
    TechnologyType,
  ],
  resolvers: merge(
    MasterResourceResolver,
    MasterLandResolver,
    MasterMachineResolver,
    MasterMachineRecipeResolver,
    MasterTechnologyResolver,
    MasterPartResolver,
    MasterPartRecipeResolver,
    MasterBlueprintResolver,
    EnergyResolver,
    ResourceResolver,
    PartResolver,
    LandResolver,
    MachineResolver,
    TechnologyResolver,
  ),
});

export default graphqlHTTP((req, res, graphQLParams) => {
  return { schema, graphiql: true, context: { user: req.user } };
});
