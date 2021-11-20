import { MasterBlueprintModel } from "./model";

const find = async (params) => {
  return await MasterBlueprintModel.find(params);
};

export { find };
