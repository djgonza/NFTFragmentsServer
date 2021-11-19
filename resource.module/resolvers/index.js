import { find } from "../actions";
import deposit from "./deposit";
import withdraw from "./withdraw";
import {findByKey} from '../../master.module/resource/actions'

const resolvers = {
  Query: {
    resources: async (obj, args, context, info) => {
      const { user } = context;
      return await find({ user: user.id });
    },
  },
  Resource: {
    masterData: async (resource) => {
      return await findByKey(resource.master);
    }
  },
  Mutation: {
    depositResource: deposit,
    withdrawResource: withdraw,
  },
};

export default resolvers;
