import { find } from "./actions";
import { findByKey as FindMasterPartByKey } from "../part/actions";
import { findByKey as FindMasterResourceByKey } from "../resource/actions";

const resolver = {
  Query: {
    masterPartRecipes: async () => await find(),
  },
  MasterPartRecipePartAmount: {
    masterPartData: async (masterPartAmount) => {
      return await FindMasterPartByKey(masterPartAmount.masterPart);
    },
  },
  MasterPartRecipeResourceAmount: {
    masterResourceData: async (masterResourceAmount) => {
      return await FindMasterResourceByKey(masterResourceAmount.masterResource);
    },
  },
};

export default resolver;
