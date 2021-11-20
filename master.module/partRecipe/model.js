import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const masterPartAmount = {
  masterPart: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const masterResourceAmount = {
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const MasterPartRecipe = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  masterPartsInput: [masterPartAmount],
  masterResourcesInput: [masterResourceAmount],
  masterPartOutput: [masterPartAmount],
});

const MasterPartRecipeModel = mongoose.model(
  "Master-Part-Recipe",
  MasterPartRecipe
);

export { MasterPartRecipeModel, MasterPartRecipe };
