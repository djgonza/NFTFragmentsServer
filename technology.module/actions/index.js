import { TechnologyModel } from "../models";

const find = async (params) => {
  return await TechnologyModel.find(params);
};

const findByKey = async (user, masterTechnologyKey) => {
    return await TechnologyModel.findOne({user, masterTechnology: masterTechnologyKey})
}

const unlockTechnology = async (user, masterTechnologyKey) => {

    const newTechnology = new TechnologyModel({
      user,
      masterTechnology: masterTechnologyKey
    });

    await newTechnology.save();
    return newTechnology;

}


export { find, findByKey, unlockTechnology };
