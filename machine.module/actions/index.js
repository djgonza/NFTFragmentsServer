import { MachineModel } from "../models";

const create = async (user, masterMachine) => {
  const newMachine = new MachineModel({
    user,
    masterMachine,
  });

  await newMachine.save();
  return newMachine;
};

const findOne = async (params) => {
  return await MachineModel.findOne(params);
};

const findById = async (_id) => {
  return await MachineModel.findById(_id);
};

export { findById, findOne, create };
