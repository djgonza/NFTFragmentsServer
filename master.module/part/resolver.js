import { find } from "./actions";
import { find as FindMasterPartsRecipe } from "../partRecipe/actions";

const resolver = {
  Query: {
    masterParts: async () => await find(),
  },
  MasterPart: {
    masterPartRecipes: async (masterPart) => {
      return await FindMasterPartsRecipe();
    },
  },
};

export default resolver;
