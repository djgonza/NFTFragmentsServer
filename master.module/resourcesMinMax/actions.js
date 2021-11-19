import { MasterResourceMinMaxModel } from "../resourcesMinMax/model";

const find = async (params) => {
  return await MasterResourceMinMaxModel.find(params).exec();
};

export { find };
