import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterMachineRecipeSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true
  },
  machine: {
    type: schema.Types.Number,
    require: true
  },
  recipe: {
    type: schema.Types.Number,
    require: true
  }
});

const MasterMachineRecipeModel = mongoose.model(
  "Master-Machine-Recipe",
  MasterMachineRecipeSchema
);

export { MasterMachineRecipeModel, MasterMachineRecipeSchema };
