import { MachineModel } from "../models";

const findById = async (_id) => {
  return await MachineModel.findById(_id);
};

export { findById };
