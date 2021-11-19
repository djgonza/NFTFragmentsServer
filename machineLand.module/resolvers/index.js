import { MachineLandModel } from "../models";

import create from "./create";
import remove from "./remove";

const resolvers = {
  Query: {
    machinesLand: (obj, args, context, info) => {
      const { user } = context;
      return MachineLandModel.find({ user: user.id });
    }
  },
  // Mutation: {
  //   createMachineLand: create,
  //   removeMachineLand: remove
  // }
};

export default resolvers;
