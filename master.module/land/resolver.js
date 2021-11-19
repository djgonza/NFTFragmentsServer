import { find, findByKey } from "../land/actions";
import { find as ResourcesMinMaxFind } from "../resourcesMinMax/actions";

const resolver = {
  Query: {
    masterLands: async () => await find(),
    masterLand: async (obj, args, context, info) => {
      return await findByKey(args.key)
    },
  },
  MasterLand: {
    resources: async (masterLand) => {
      return await ResourcesMinMaxFind({ master: masterLand.masterResources });
    },
  },
};

export default resolver;
