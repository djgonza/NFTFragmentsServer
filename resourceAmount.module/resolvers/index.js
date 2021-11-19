import { ResourcesAmountModel } from "../models";
import { findByKey as FindMasterResourceByKey } from "../../master.module/resource/actions";

import create from "./create";
import withdraw from "./withdraw";

const resolvers = {
  Query: {
    resourcesAmount: (obj, args, context, info) => {
      const { user } = context;
      return ResourcesAmountModel.find({ user: user.id });
    },
  },
  ResourceAmount: {
    masterData: async (resourceAmount) => {
      return await FindMasterResourceByKey(resourceAmount.master);
    },
  },
  Mutation: {
    createResourceAmount: create,
    withdrawResourceAmount: withdraw,
  },
};

export default resolvers;
