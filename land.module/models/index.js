import mongoose from "mongoose";

const schema = mongoose.Schema;

const landSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true
  },
  master: {
    type: schema.Types.Number,
    require: true
  },
});

const LandModel = mongoose.model("land", landSchema);

export { LandModel, landSchema };
