import { create } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";
import { findByKey as FindMasterMachineByKey } from "../../master.module/machine/actions";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const { masterMachineKey } = args;

  const masterMachine = await FindMasterMachineByKey(masterMachineKey);
  if(!masterMachine) throw new Error("Not machinemaster found")

  const newMachine = await create(user.id, masterMachine.key);
  return newMachine;
};

export default asyncWrapper(Create);
