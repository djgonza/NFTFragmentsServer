import { find } from "./actions";
import { findByKey as FindMasterResourceByKey } from "../resource/actions";

const resolver = {
  Query: {
    masterMachineRecipes: async () => await find(),
  },
  MasterRecipeResourceAmount: {
    masterResourceData: async (masterRecipeResourceAmount) => {
      return await FindMasterResourceByKey(
        masterRecipeResourceAmount.masterResource
      );
    },
  },
};

export default resolver;
