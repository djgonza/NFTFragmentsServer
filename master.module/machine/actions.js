import { MasterMachineModel } from "./model";

const find = async (params) => {
  return await MasterMachineModel.find(params);
};

const findByKey = async (key) => {
  return await MasterMachineModel.findOne({ key });
};

export { find, findByKey };
