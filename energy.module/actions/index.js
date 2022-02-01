import { EnergyModel } from "../models";

const find = async (user) => {
  return await EnergyModel.findOne({ user });
};

const deposit = async (user, amount) => {
  var energy = await find(user);
  if (!energy)
    energy = new EnergyModel({
      user,
      amount: 0,
    });
  energy.amount += amount;
  await energy.save();
  return energy;
};

const withdraw = async (user, amount) => {
  var energy = await find(user);
  if (!energy) throw new Error("Not energy found");
  if (energy.amount < amount) throw new Error("Not energy to withdraw");
  energy.amount -= amount;
  await energy.save();
  return energy;
};

export { find, deposit, withdraw };
