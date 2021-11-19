import { LandModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";
import { createMachineLand } from "../../machineLand.module/actions";
import { findById as FindMachineById } from "../../machine.module/actions";

const PlaceMachine = async (obj, args, context, info) => {
  const { _id, machine } = args;
  //const { user } = context;

  const newMachineLand = await createMachineLand(_id, machine);

  const machinePlaced = await FindMachineById(newMachineLand.machine);

  return machinePlaced;
};

export default asyncWrapper(PlaceMachine);
