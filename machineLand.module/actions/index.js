import { LandModel } from "../../land.module/models";
import { MachineModel } from "../../machine.module/models";
import { MachineLandModel } from "../models";

const findLandByMachine = async (machineID) => {
  const machineLand = await MachineLandModel.findOne({ machine: machineID });
  if (!machineLand) return;

  const land = await LandModel.findOne({ _id: machineLand.land });
  return land;
};

const findMachineByLand = async (landID) => {
  const machineLand = await MachineLandModel.findOne({ land: landID });
  if (!machineLand) return;

  const machine = await MachineModel.findOne({ _id: machineLand.machine });
  return machine;
};

const createMachineLand = async (land, machine) => {
  await removeMachineLand(land);

  const newMachineLand = new MachineLandModel({
    land,
    machine,
  });

  await newMachineLand.save();

  return newMachineLand;
};

const removeMachineLand = async (land) => {
  await MachineLandModel.findOneAndDelete({ land });
};

export {
  findLandByMachine,
  findMachineByLand,
  createMachineLand,
  removeMachineLand,
};
