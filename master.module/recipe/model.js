import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterRecipeSchema = new schema({
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
  machine: {
    type: schema.Types.Number,
    require: true,
  },
  masterInput: {
    type: schema.Types.Number,
    require: true,
  },
  masterOutput: {
    type: schema.Types.Number,
    require: true,
  },
  withdrawResourcesOfLand: {
    type: schema.Types.Boolean,
    default: false,
  },
});

const MasterRecipeModel = mongoose.model("Master-Recipe", MasterRecipeSchema);

export { MasterRecipeModel, MasterRecipeSchema };
