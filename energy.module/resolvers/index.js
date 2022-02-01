import { find, deposit as DepositEnergy } from "../actions";

import deposit from "./deposit";
import withdraw from "./withdraw";

const resolvers = {
  Query: {
    energy: async (obj, args, context, info) => {
      const { user } = context;
      var energy = await find(user.id);
      if (!energy) energy = await DepositEnergy(user.id, 0);
      return energy;
    },
  },
  Mutation: {
    depositEnergy: deposit,
    withdrawEnergy: withdraw,
  },
};

export default resolvers;
