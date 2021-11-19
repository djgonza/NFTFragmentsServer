import { ResourcesAmountModel } from "../models";

const find = async (params) => {
  return await ResourcesAmountModel.find(params).exec();
};

const findById = async (id) => {
  return await ResourcesAmountModel.findById({ id });
};

const create = async (user, element, master, amount) => {
  const newResourceAmount = new ResourcesAmountModel({
    user,
    master,
    element,
    amount,
  });

  await newResourceAmount.save();

  return newResourceAmount;
};

const withdraw = async (element, masterResource,  amount) => {

  const resourceAmount = await findById({ element, master: masterResource });
  if(!resourceAmount) return;

  resourceAmount.amount -= amount;
  if(resourceAmount.amount < 0) resourceAmount.amount = 0;

  await resourceAmount.save();

  return resourceAmount;;

}

export { find, findById, create, withdraw };
