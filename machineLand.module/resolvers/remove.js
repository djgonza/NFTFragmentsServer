import { MachineLandModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Remove = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machineLandModel = await MachineLandModel.findOne({
    user: user.id,
    _id
  });

  if (!machineLandModel) throw new Error("Not machine land found");

  await MachineLandModel.findOneAndRemove({ _id });

  return machineLandModel;
};

export default asyncWrapper(Remove);
