import { ResourcesAmountModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { element, masterResource, amount } = args;

  var resourceAmount = await ResourcesAmountModel.findOne({
    user: user.id,
    element,
    masterResource,
  });

  if (!resourceAmount) throw new Error("Not resource amount found");
  if(resourceAmount.amount < amount) throw new Error("Not amount to withdraw");

  resourceAmount.amount -= amount;

  await resourceAmount.save();

  return resourceAmount;
};

export default asyncWrapper(Withdraw);
