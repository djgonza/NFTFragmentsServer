import { MachineModel } from "../models";
import { findByKey as FindRecipeByKey } from "../../master.module/recipe/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const SetRecipe = async (obj, args, context, info) => {
  const { user } = context;
  const { _id, masterRecipeKey } = args;

  const machine = await MachineModel.findOne({ user: user.id, _id });
  if (!machine) throw new Error("Not machine found");

  const recipe = await FindRecipeByKey(masterRecipeKey);
  if (!recipe) throw new Error("Not recipe found");

  machine.recipe = recipe.key;
  machine.running = false;
  machine.startDate = 0;

  await machine.save();

  return recipe;
};

export default asyncWrapper(SetRecipe);
