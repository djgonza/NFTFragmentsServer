import mongoose from "mongoose";

const schema = mongoose.Schema;

const landResource = {
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const landSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  masterLand: {
    type: schema.Types.Number,
    require: true,
  },
  landResources: [landResource],
  currentMachine: {
    type: schema.Types.ObjectId,
  },
});

const LandModel = mongoose.model("land", landSchema);

export { LandModel, landSchema };
