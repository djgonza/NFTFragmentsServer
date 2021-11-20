import { MasterPartModel } from "./model";

const find = async (params) => {
  return await MasterPartModel.find(params);
};

const findByKey = async (key) => {
  return await MasterPartModel.findOne({key});
};


export { find, findByKey };
