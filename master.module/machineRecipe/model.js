import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterMachineRecipeResourceAmount = {
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const MasterMachineRecipeSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  time: {
    type: schema.Types.Number,
    require: true,
    default: 0,
  },
  energyInput: {
    type: schema.Types.Number,
    require: true,
    default: 0,
  },
  energyOutput: {
    type: schema.Types.Number,
    require: true,
    default: 0,
  },
  masterResourcesInput: [MasterMachineRecipeResourceAmount],
  masterResourcesOutput: [MasterMachineRecipeResourceAmount],
});

const MasterMachineRecipeModel = mongoose.model(
  "Master-Machine-Recipe",
  MasterMachineRecipeSchema
);

export { MasterMachineRecipeModel, MasterMachineRecipeSchema };
