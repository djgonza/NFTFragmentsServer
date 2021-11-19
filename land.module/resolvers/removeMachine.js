import { LandModel } from "../models";
import { asyncWrapper } from "../../utils/asyncWrapper";

const RemoveMachine = async (obj, args, context, info) => {
  const { user } = context;
  const { _id, machine } = args;

  const land = await LandModel.findOne({ _id, user: user.id });

  if (!land) throw new Error("Land is not available");
  if (land.currentMachine != machine) throw new Error("Machine not in land");

  land.currentMachine = null;
  
  await land.save();
  return land;
};

export default asyncWrapper(RemoveMachine);
