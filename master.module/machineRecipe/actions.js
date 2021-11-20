import { MasterMachineRecipeModel } from "./model";

const find = async (params) => {
  return await MasterMachineRecipeModel.find(params);
};

const findByKey = async key => {
  return await MasterMachineRecipeModel.findOne({ key });
};

export { find, findByKey };
