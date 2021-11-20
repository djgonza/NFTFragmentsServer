import { asyncWrapper } from "../../utils/asyncWrapper";
import { findById } from "../actions";
import { withdraw as WithdrawResource } from "../../resource.module/actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";

const StartWork = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await findById(_id);
  if (!machine) throw new Error("Not machine found");
  if (machine.masterRecipe === null) throw new Error("Not recipe set");

  const masterMachineRecipe = await FindMasterMachineRecipeByKey(
    machine.masterRecipe
  );
  if (!masterMachineRecipe) throw new Error("Recipe not found");

  machine.running = true;
  machine.endDate = Date.now() + masterMachineRecipe.time;

  await machine.save();

  for (let i = 0; i < masterMachineRecipe.masterResourcesInput.length; i++) {
    const masterMachineRecipeMasterResouceInput =
      masterMachineRecipe.masterResourcesInput[i];
      await WithdrawResource(
        user.id,
        masterMachineRecipeMasterResouceInput.masterResource,
        masterMachineRecipeMasterResouceInput.amount
      );
  }

  return machine;
};

export default asyncWrapper(StartWork);
