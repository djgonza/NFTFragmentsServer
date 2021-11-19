import { MasterResourceAmountModel } from "./model";

const find = async params => {
  return await MasterResourceAmountModel.find(params);
};

export { find };
