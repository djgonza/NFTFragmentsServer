import { find } from "./actions";
import { findByKey as FindMasterMachineRecipeByKey, find as FindMasterMachineRecipe } from "../machineRecipe/actions";

const resolver = {
  Query: {
    masterMachines: async () => await find(),
  },
  MasterMachine: {
    masterMachineRecipes: async (masterMachine) => {
      return await FindMasterMachineRecipe({
        key: { $in: masterMachine.masterMachineRecipes },
      });
    },
  },
};

export default resolver;
