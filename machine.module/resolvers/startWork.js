import { asyncWrapper } from "../../utils/asyncWrapper";
import { findById } from "../actions";
import {
  find as FindEnegy,
  withdraw as WithdrawEnergy,
} from "../../energy.module/actions";
import {
  withdraw as WithdrawResource,
  hasResourceAmount,
} from "../../resource.module/actions";
import { findByKey as FindMasterMachineRecipeByKey } from "../../master.module/machineRecipe/actions";

const StartWork = async (obj, args, context, info) => {
  const { user } = context;
  const { _id } = args;

  const machine = await findById(_id);
  if (!machine) throw new Error("Not machine found");
  if (machine.masterMachineRecipe === null) throw new Error("Not recipe set");

  const masterMachineRecipe = await FindMasterMachineRecipeByKey(
    machine.masterMachineRecipe
  );
  if (!masterMachineRecipe) throw new Error("Recipe not found");

  const energy = await FindEnegy(user.id);
  if (energy.amount < masterMachineRecipe.energyInput)
    throw new Error("Not energy to start");

  for (let i = 0; i < masterMachineRecipe.masterResourcesInput.length; i++) {
    const masterMachineRecipeMasterResouceInput =
      masterMachineRecipe.masterResourcesInput[i];
    if (
      !(await hasResourceAmount(
        user.id,
        masterMachineRecipeMasterResouceInput.masterResource,
        masterMachineRecipeMasterResouceInput.amount
      ))
    )
      throw new Error("Not have resources for work");
  }

  machine.running = true;
  machine.endDate = Date.now() + masterMachineRecipe.time;

  await machine.save();

  if (masterMachineRecipe.energyInput > 0) {
    await WithdrawEnergy(user.id, masterMachineRecipe.energyInput);
  }

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
