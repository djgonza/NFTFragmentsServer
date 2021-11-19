import { asyncWrapper } from "../../utils/asyncWrapper";
import { MachineModel } from "../models";
import { withdraw as WithdrawResource } from "../../resource.module/actions";
import { findByKey as FindRecipeByKey } from "../../master.module/recipe/actions";
import { find as FindMasterResourceAmount } from "../../master.module/resourceAmount/actions";

const StartWork = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await MachineModel.findOne({ user: user.id, _id });

  if (!machine) throw new Error("Not machine found");
  if (machine.recipe === null) throw new Error("Not recipe set");

  const recipe = await FindRecipeByKey(machine.recipe);
  if (!recipe) throw new Error("Recipe not found");

  machine.running = true;
  machine.endDate = Date.now() + recipe.time;

  await machine.save();

  if (recipe.masterInput !== null) {
    const masterResourcesAmount = await FindMasterResourceAmount({
      master: recipe.masterInput,
    });

    for (let i = 0; i < masterResourcesAmount.length; i++) {
      await WithdrawResource(
        user.id,
        masterResourcesAmount[i].masterResource,
        masterResourcesAmount[i].amount
      );
    }
  }

  return machine;
};

export default asyncWrapper(StartWork);
