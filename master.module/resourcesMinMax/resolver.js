import { find } from "./actions";
import { findByKey as FindResourceByKey } from "../resource/actions";

const resolver = {
  Query: {
    masterResourcesMinMax: async () => await find(),
  },
  MasterResourcesAmountMinMax: {
    masterResource: async (MasterResourcesAmountMinMax) => {
      const masterResourceAmountMinMax = await FindResourceByKey(
        MasterResourcesAmountMinMax.resource
      );
      return masterResourceAmountMinMax;
    },
  },
};

export default resolver;
