import { find } from "./actions";
import { findByKey as FindResourceByKey } from "../resource/actions";

const resolver = {
  Query: {
    masterResourcesAmount: async () => await find(),
  },
  MasterResourceAmount: {
    masterResourceData: async (MasterResourceAmount) => {
      return await FindResourceByKey(MasterResourceAmount.masterResource);
    },
  },
};

export default resolver;
