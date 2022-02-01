import { ResourceModel } from "../models";

const find = async (params) => {
  return await ResourceModel.find(params);
};

const deposit = async (user, masterResource, amount) => {
  var resource = await ResourceModel.findOne({
    user,
    masterResource,
  });
  if (!resource)
    resource = new ResourceModel({
      user,
      masterResource,
      amount: 0,
    });

  resource.amount += amount;
  if (resource.amount < 0) resource.amount = 0;

  await resource.save();

  return resource;
};

const withdraw = async (user, masterResource, amount) => {
  const resource = await ResourceModel.findOne({
    user,
    masterResource,
  });
  if (!resource) return;

  resource.amount -= amount;
  if (resource.amount < 0) resource.amount = 0;

  await resource.save();

  return resource;
};

const hasResourceAmount = async (user, masterResource, amount) => {
  const resource = await ResourceModel.findOne({ user, masterResource });
  return amount <= resource.amount;
};

export { find, deposit, withdraw, hasResourceAmount };
