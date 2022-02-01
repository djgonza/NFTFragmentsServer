import { LandModel } from "../models";
import { findByKey as FindMasterLandByKey } from "../../master.module/land/actions";
import { findByKey as FindMasterResourceByKey } from "../../master.module/resource/actions";
import { findById as FindMachineById } from "../../machine.module/actions";

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
    masterLandData: async (land) => {
      return await FindMasterLandByKey(land.masterLand);
    },
    currentMachine: async (land) => {
      if (!land.currentMachine) return;
      return await FindMachineById(land.currentMachine);
    },
  },
  LandResourceAmount: {
    masterResourceData: async (landResourceAmount) => {
      console.log("landResourceAmount", landResourceAmount);
      return await FindMasterResourceByKey(landResourceAmount.masterResource);
    },
  },
  Mutation: {
    createLand: create,
    placeMachineInLand: placeMachine,
    removeMachineFromLand: removeMachine,
  },
};

export default resolvers;
