import { find } from "./actions";
import { find as ResourceAmountFind } from "../resourceAmount/actions";
import { findMachineByRecipe } from "../machineRecipe/actions";

const resolver = {
  Query: {
    masterRecipes: async () => await find(),
  },
  MasterRecipe: {
    machine: async (recipe) => await findMachineByRecipe(recipe.key),
    input: async (recipe) =>
      await ResourceAmountFind({ master: recipe.masterInput }),
    output: async (recipe) =>
      await ResourceAmountFind({ master: recipe.masterOutput }),
  },
};

export default resolver;
