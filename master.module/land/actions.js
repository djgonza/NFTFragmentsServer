import { MasterLandModel } from "./model";

const find = async () => {
  return await MasterLandModel.find();
};

const findByKey = async (key) => {
  return await MasterLandModel.findOne({key}).exec();
};

export { find, findByKey };
