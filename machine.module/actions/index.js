import { MachineModel } from "../models";

const create = async (user, masterMachine) => {
  const newMachine = new MachineModel({
    user,
    masterMachine,
  });

  await newMachine.save();
  return newMachine;
};

const find = async (params) => {
  return await MachineModel.find(params);
};

const findOne = async (params) => {
  return await MachineModel.findOne(params);
};

const findById = async (_id) => {
  return await MachineModel.findById(_id);
};

export { find, findById, findOne, create };
