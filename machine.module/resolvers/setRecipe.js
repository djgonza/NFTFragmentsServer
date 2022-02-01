import { findById } from "../actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const SetRecipe = async (obj, args, context, info) => {
  const { user } = context;
  const { _id, masterRecipeKey } = args;

  const machine = await findById(_id);
  if (!machine) throw new Error("Not machine found");

  const masterMachineRecipe = await FindMasterMachineRecipeByKey(masterRecipeKey);
  if (!masterMachineRecipe) throw new Error("Not recipe found");

  machine.masterMachineRecipe = masterMachineRecipe.key;
  machine.running = false;
  machine.startDate = 0;

  await machine.save();

  return machine;
};

export default asyncWrapper(SetRecipe);
