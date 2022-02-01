import { find as FindMachines } from "../actions";
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
      return FindMachines({ user: user.id });
    },
  },
  Machine: {
    masterMachineData: async (machine) => {
      return await FindMasterMachineByKey(machine.masterMachine);
    },
    landData: async (machine) => {
      return await FindOneLand({ currentMachine: machine._id });
    },
    masterMachineRecipeData: async (machine) => {
      return await FindMasterMachineRecipeByKey(machine.masterMachineRecipe);
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
