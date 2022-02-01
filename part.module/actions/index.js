import { PartModel } from "../models";

const find = async (params) => {
  return await PartModel.find(params);
};

const deposit = async (user, masterPart, amount) => {
  var part = await PartModel.findOne({
    user,
    masterPart,
  });
  if (!part)
    part = new PartModel({
      user,
      masterPart,
      amount: 0,
    });

  part.amount += amount;
  if (part.amount < 0) part.amount = 0;

  await part.save();

  return part;
};

const withdraw = async (user, masterPart, amount) => {
  const part = await PartModel.findOne({
    user,
    masterPart,
  });
  if (!part) return;

  part.amount -= amount;
  if (part.amount < 0) part.amount = 0;

  await part.save();

  return part;
};

const hasPartAmount = async (user, masterPart, amount) => {
  const part = await PartModel.findOne({ user, masterPart });
  return amount <= part.amount;
};

export { find, deposit, withdraw, hasPartAmount };
