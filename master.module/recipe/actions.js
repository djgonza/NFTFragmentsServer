import { MasterRecipeModel } from "./model";

const find = async () => {
  return await MasterRecipeModel.find();
};

const findByKey = async key => {
  return await MasterRecipeModel.findOne({ key });
};

export { find, findByKey };
