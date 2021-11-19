import { LandModel } from "../models";
import { findByKey as FindMasterLandByKey } from "../../master.module/land/actions";
import { findByKey as FindMasterMachineByKey } from "../../master.module/machine/actions";
import { find as FindResourceAmount } from "../../resourceAmount.module/actions";
import { findMachineByLand } from "../../machineLand.module/actions";

import create from "./create";
import placeMachine from "./placeMachine";
import removeMachine from "./removeMachine";

const resolvers = {
  Query: {
    lands: async (obj, args, context, info) => {
      const { user } = context;
      return await LandModel.find({ user: user.id });
    },
  },
  Land: {
    masterData: async (land) => {
      const masterLandData = await FindMasterLandByKey(land.master);
      return masterLandData;
    },
    currentMachine: async (land) => {
      return await findMachineByLand(land._id);
    },
    resources: async (land) => {
      const resourcesAmount = await FindResourceAmount({ element: land._id });
      return resourcesAmount;
    },
  },

  Mutation: {
    createLand: create,
    placeMachineInLand: placeMachine,
    removeMachineFromLand: removeMachine,
  },
};

export default resolvers;
