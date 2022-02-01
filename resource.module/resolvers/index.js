import { find } from "../actions";
import deposit from "./deposit";
import withdraw from "./withdraw";
import { findByKey as FindResourceByKey } from "../../master.module/resource/actions";

const resolvers = {
  Query: {
    resources: async (obj, args, context, info) => {
      const { user } = context;
      return await find({ user: user.id });
    },
  },
  Resource: {
    masterResourceData: async (resource) => {
      return await FindResourceByKey(resource.masterResource);
    },
  },
  Mutation: {
    depositResource: deposit,
    withdrawResource: withdraw,
  },
};

export default resolvers;
