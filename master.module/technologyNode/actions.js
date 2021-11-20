import { MasterTechnologyNodeModel } from "./model";

const find = async (params) => {
  return await MasterTechnologyNodeModel.find(params);
};

export { find };
