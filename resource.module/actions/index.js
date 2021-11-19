import { ResourceModel } from "../models";

const find = async (params) => {
  return await ResourceModel.find(params);
}

const deposit = async (user, masterResource, amount) => {
  var resource = await ResourceModel.findOne({
    user,
    master: masterResource,
  });
  if (!resource)
    resource = new ResourceModel({
      user,
      master: masterResource,
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
    master: masterResource,
  });
  if (!resource) return;

  resource.amount -= amount;
  if (resource.amount < 0) resource.amount = 0;

  await resource.save();

  return resource;
};

export { find, deposit, withdraw };
