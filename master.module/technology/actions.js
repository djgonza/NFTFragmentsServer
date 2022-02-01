import { MasterTechnologyModel } from "./model";

const find = async (params) => {
  return await MasterTechnologyModel.find(params);
};

const findByKey = async (key) => {
  return await MasterTechnologyModel.findOne({key});
};

export { find, findByKey };

