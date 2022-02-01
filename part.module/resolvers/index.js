import { find } from "../actions";
import deposit from "./deposit";
import withdraw from "./withdraw";
import { findByKey as FindMasterPartByKey } from "../../master.module/part/actions";

const resolvers = {
  Query: {
    parts: async (obj, args, context, info) => {
      const { user } = context;
      return await find({ user: user.id });
    },
  },
  Part: {
    masterPartData: async (part) => {
      return await FindMasterPartByKey(part.masterPart);
    },
  },
  Mutation: {
    depositPart: deposit,
    withdrawPart: withdraw,
  },
};

export default resolvers;
