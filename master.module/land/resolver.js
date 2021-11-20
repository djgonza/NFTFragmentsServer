import { find, findByKey } from "../land/actions";
import { findByKey as FindMasterResourceByKey } from "../resource/actions";

const resolver = {
  Query: {
    masterLands: async () => await find(),
    masterLand: async (obj, args, context, info) => {
      return await findByKey(args.key);
    },
  },
  MasterLandResourceMinMax: {
    masterResourceData: async (masterLandResourceMinMax) => {
      return await FindMasterResourceByKey(
        masterLandResourceMinMax.masterResource
      );
    },
  },
};

export default resolver;
