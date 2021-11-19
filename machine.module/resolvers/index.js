import { MachineModel } from "../models";

import { findLandByMachine } from "../../machineLand.module/actions";
import { findByKey as FindMasterMachineByKey } from "../../master.module/machine/actions";
import { findByKey as FindMasterRecipeByKey } from "../../master.module/recipe/actions";

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
    masterData: async (machine) => {
      return await FindMasterMachineByKey(machine.master);
    },
    land: async (machine) => {
      const land = await findLandByMachine(machine._id);
      return land && land._id;
    },
    recipeData: async (machine) => {
      return await FindMasterRecipeByKey(machine.recipe);
    }
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
