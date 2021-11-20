import { findById } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const ClearRecipe = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await findById(_id);
  if (!machine) throw new Error("Not machine found");

  machine.masterRecipe = null;

  await machine.save();

  return machine;
};

export default asyncWrapper(ClearRecipe);
