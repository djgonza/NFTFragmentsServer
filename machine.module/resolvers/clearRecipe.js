import { MachineModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const ClearRecipe = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await MachineModel.findOne({ user: user.id, _id });
  if (!machine) throw new Error("Not machine found");

  machine.currentRecipe = null;

  await machine.save();

  return machine;
};

export default asyncWrapper(ClearRecipe);
