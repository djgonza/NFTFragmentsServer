import { MasterResourceModel } from "./model";

const find = async (params) => {
  return await MasterResourceModel.find(params).exec();
};

const findByKey = async (key) => {
  return await MasterResourceModel.findOne({ key });
};

export { find, findByKey };
