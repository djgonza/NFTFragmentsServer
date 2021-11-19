import { find } from "./actions";
import { find as findMachineRecipes } from "../machineRecipe/actions";
import { findByKey as findRecipeByKey } from "../recipe/actions";

const resolver = {
  Query: {
    masterMachines: async () => await find()
  },
  MasterMachine: {
    recipes: async machine => {
      const machineRecipes = await findMachineRecipes({ machine: machine.key });
      const recipes = [];
      for (let i = 0; i < machineRecipes.length; i++) {
        console.log(
          await findRecipeByKey(machineRecipes[i].recipe),
          machineRecipes[i].recipe
        );
        recipes.push(await findRecipeByKey(machineRecipes[i].recipe));
      }
      return recipes;
    }
  }
};

export default resolver;
