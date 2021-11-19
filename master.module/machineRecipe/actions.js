import { MasterMachineRecipeModel } from "./model";

const find = async (params) => {
  return await MasterMachineRecipeModel.find(params);
};

const findMachineByRecipe = async (masterRecipeKey) => {

  const masterMachineRecipe = await MasterMachineRecipeModel.findOne({recipe: masterRecipeKey})

  return masterMachineRecipe && masterMachineRecipe.machine;

}

export { find, findMachineByRecipe };
