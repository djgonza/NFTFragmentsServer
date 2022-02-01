import { find as FindTechnologies } from "../actions";
import { findByKey as FindMasterTechologyByKey } from "../../master.module/technology/actions";

import unlockTechnology from "./unlockTechnology";

const resolvers = {
  Query: {
    technologies: async (obj, args, context, info) => {
      const { user } = context;
      return await FindTechnologies({ user: user.id });
    },
  },
  Technology: {
    masterTechnologyData: async (technology) => {
      return await FindMasterTechologyByKey(technology.masterTechnology);
    },
  },
  Mutation: {
    unlockTechnology,
  },
};

export default resolvers;
