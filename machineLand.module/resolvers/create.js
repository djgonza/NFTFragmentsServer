import { MachineLandModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const newMachineLandModel = new MachineLandModel({
    ...args,
    user: user.id
  });

  await newMachineLandModel.save();

  return newMachineLandModel;
};

export default asyncWrapper(Create);
