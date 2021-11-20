import { LandModel } from "../models";

const findById = async (_id) => {
  return await LandModel.findById(_id);
};

const findOne = async (params) => {
  return await LandModel.findOne(params);
};

const create = async (user, masterLand, landResources) => {
  const newLand = new LandModel({
    user,
    masterLand,
    landResources,
    currentMachine: null,
  });
  await newLand.save();
  return newLand;
};

export { findById, create, findOne };
