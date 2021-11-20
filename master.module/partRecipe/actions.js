import { MasterPartRecipeModel } from "./model";

const find = async (params) => {
  return await MasterPartRecipeModel.find(params);
};

export { find };
