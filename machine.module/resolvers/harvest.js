import { asyncWrapper } from "../../utils/asyncWrapper";
import { MachineModel } from "../models";

import { withdraw as WithdrawResourceAmount } from "../../resourceAmount.module/actions";
import { findLandByMachine } from "../../machineLand.module/actions";
import { find as FindResourceAmount } from "../../master.module/resourceAmount/actions";
import { findByKey as FindRecipeByKey } from "../../master.module/recipe/actions";
import { deposit as DepositResource } from "../../resource.module/actions";

const Harvest = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await MachineModel.findOne({ user: user.id, _id });
  if (!machine) throw new Error("Not machine found");
  if (machine.recipe === null) throw new Error("Not recipe set");

  const recipe = await FindRecipeByKey(machine.recipe);
  if (!recipe) throw new Error("Recipe not found");

  machine.running = false;
  machine.endDate = 0;

  await machine.save();

  const resourcesAmount = await FindResourceAmount({ master: recipe.key });
  for (let i = 0; i < resourcesAmount.length; i++) {
    if (recipe.withdrawResourcesOfLand) {
      const land = await findLandByMachine(machine._id);
      await WithdrawResourceAmount(
        land._id,
        resourcesAmount[i].masterResource,
        resourcesAmount[i].amount
      );
    }

    await DepositResource(
      user.id,
      resourcesAmount[i].masterResource,
      resourcesAmount[i].amount
    );
  }

  return machine;
};

export default asyncWrapper(Harvest);
