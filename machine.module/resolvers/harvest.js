import { asyncWrapper } from "../../utils/asyncWrapper";

import { findById as FindMachineById } from "../actions";
import { findOne as FindOneLand } from "../../land.module/actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";
import { deposit as DepositResource } from "../../resource.module/actions";

const Harvest = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await FindMachineById(_id);
  if (!machine) throw new Error("Not machine found");
  if (machine.masterRecipe === null) throw new Error("Not recipe set");
  if (!machine.running) throw new Error("Machine not running");
  if (!machine.endDate > Date.now()) throw new Error("Machine not harvest");

  const masterMachineRecipe = await FindMasterMachineRecipeByKey(
    machine.masterRecipe
  );
  if (!masterMachineRecipe) throw new Error("Recipe not found");

  const land = await FindOneLand({ currentMachine: machine._id });
  if (!land) throw new Error("No land set");

  machine.running = false;
  machine.endDate = 0;

  await machine.save();

  for (let i = 0; i < masterMachineRecipe.masterResourcesOutput.length; i++) {
    const masterMachinerecipeResourceOutput =
      masterMachineRecipe.masterResourcesOutput[i];

    if (masterMachineRecipe.withdrawResourcesOfLand) {
      land.resources = land.resources.map((landResource) => {
        if (
          landResource.masterResource !==
          masterMachinerecipeResourceOutput.masterResource
        )
          return landResource;
        landResource.amount -= masterMachinerecipeResourceOutput.amount;
        if (landResource.amount < 0) landResource.amount = 0;
        return landResource;
      });
    }

    await DepositResource(
      user.id,
      masterMachinerecipeResourceOutput.masterResource,
      masterMachinerecipeResourceOutput.amount
    );
  }

  return machine;
};

export default asyncWrapper(Harvest);
