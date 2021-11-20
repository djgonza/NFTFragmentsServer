import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const MasterPart = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  masterPartRecipes: [{
    type: schema.Types.Number,
    require: true,
  }],
});

const MasterPartModel = mongoose.model(
  "Master-Part",
  MasterPart
);

export { MasterPartModel, MasterPart };
