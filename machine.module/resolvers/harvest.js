import { asyncWrapper } from "../../utils/asyncWrapper";

import { findById as FindMachineById } from "../actions";
import { deposit as DepositEnergy } from "../../energy.module/actions";
import { findOne as FindOneLand } from "../../land.module/actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";
import { deposit as DepositResource } from "../../resource.module/actions";

const Harvest = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await FindMachineById(_id);
  if (!machine) throw new Error("Not machine found");
  if (machine.masterMachineRecipe === null) throw new Error("Not recipe set");
  if (!machine.running) throw new Error("Machine not running");
  if (!machine.endDate > Date.now()) throw new Error("Machine not harvest");

  const masterMachineRecipe = await FindMasterMachineRecipeByKey(
    machine.masterMachineRecipe
  );
  if (!masterMachineRecipe) throw new Error("Recipe not found");

  const land = await FindOneLand({ currentMachine: machine._id });
  if (!land) throw new Error("No land set");

  machine.running = false;
  machine.endDate = 0;

  await machine.save();

  if (masterMachineRecipe.energyOutput > 0) {
    await DepositEnergy(user.id, masterMachineRecipe.energyOutput);
  }

  for (let i = 0; i < masterMachineRecipe.masterResourcesOutput.length; i++) {
    const masterMachineRecipeResourceOutput =
      masterMachineRecipe.masterResourcesOutput[i];

    for (let y = 0; y < land.landResources.length; y++) {
      const landResource = land.landResources[y];
      if (
        landResource.masterResource ===
        masterMachineRecipeResourceOutput.masterResource
      ) {
        var resourceAmountExtracted = masterMachineRecipeResourceOutput.amount;
        if (landResource.amount < masterMachineRecipeResourceOutput.amount) {
          resourceAmountExtracted = landResource.amount;
          landResource.amount = 0;
        } else {
          landResource.amount -= masterMachineRecipeResourceOutput.amount;
        }
        await DepositResource(
          user.id,
          masterMachineRecipeResourceOutput.masterResource,
          resourceAmountExtracted
        );
      }
    }
  }

  await land.save();

  return machine;
};

export default asyncWrapper(Harvest);
