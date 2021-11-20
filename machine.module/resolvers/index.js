import { MachineModel } from "../models";

import { findOne as FindOneLand } from "../../land.module/actions";
import { findByKey as FindMasterMachineByKey } from "../../master.module/machine/actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";

import create from "./create";
import setRecipe from "./setRecipe";
import clearRecipe from "./clearRecipe";
import startWork from "./startWork";
import harvest from "./harvest";


const resolvers = {
  Query: {
    machines: (obj, args, context, info) => {
      const { user } = context;
      return MachineModel.find({ user: user.id });
    },
  },
  Machine: {
    masterMachineData: async (machine) => {
      console.log(machine);
      return await FindMasterMachineByKey(machine.masterMachine);
    },
    landData: async (machine) => {
      return await FindOneLand({ currentMachine: machine._id });
    },
    masterRecipeData: async (machine) => {
      return await FindMasterMachineRecipeByKey(machine.masterRecipe);
    },
  },
  Mutation: {
    createMachine: create,
    setRecipeMachine: setRecipe,
    clearRecipeMachine: clearRecipe,
    startWorkMachine: startWork,
    harvestMachine: harvest,
  },
};

export default resolvers;
