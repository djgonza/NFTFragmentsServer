import { asyncWrapper } from "../../utils/asyncWrapper";
import { findById as FindMachineById } from "../../machine.module/actions";
import { findById as FindLandById } from "../actions";

const RemoveMachine = async (obj, args, context, info) => {
  const { _id, machineID } = args;
  const { user } = context;

  const land = await FindLandById(_id);
  if (!land) throw new Error("Land not found");

  const machine = await FindMachineById(machineID);
  if (!machine) throw new Error("Machine not found");

  land.currentMachine = null;

  await land.save();

  return land;
};

export default asyncWrapper(RemoveMachine);
