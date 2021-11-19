import { ResourcesAmountModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const { element, masterResource, amount } = args;

  var exists = await ResourcesAmountModel.findOne({
    user: user.id,
    element,
    masterResource,
  });

  if (exists) throw new Error("Already exits resource amount");

  const resourceAmount = new ResourcesAmountModel({
    user: user.id,
    ...args
  });

  await resourceAmount.save();

  return resourceAmount;
};

export default asyncWrapper(Create);
