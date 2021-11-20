import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterMachineSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  tier: {
    type: schema.Types.Number,
    require: true,
  },
  masterMachineRecipes: [
    {
      type: schema.Types.Number,
      require: true,
    },
  ],
});

const MasterMachineModel = mongoose.model(
  "Master-Machine",
  MasterMachineSchema
);

export { MasterMachineModel, MasterMachineSchema };
