import { MachineModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const newMachineModel = new MachineModel({
    ...args,
    user: user.id
  });

  await newMachineModel.save();

  return newMachineModel;
};

export default asyncWrapper(Create);
