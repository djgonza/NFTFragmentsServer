import { find } from "./actions";
import { findById as FindMachineById } from "../machine/actions";
import { findById as FindRecipeById } from "../recipe/actions";

const resolver = {
  Query: {
    masterMachinesRecipes: async () => await find(),
  },
  MasterMachineRecipe: {
    machine: async (machineRecipe) =>
      await FindMachineById(machineRecipe.machine),
    recipe: async (machineRecipe) => await FindRecipeById(machineRecipe.recipe),
  },
};

export default resolver;
