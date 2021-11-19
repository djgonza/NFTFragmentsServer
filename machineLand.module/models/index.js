import mongoose from "mongoose";

const schema = mongoose.Schema;

const machineLandSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true
  },
  machine: {
    type: schema.Types.ObjectId,
    require: true
  },
  land: {
    type: schema.Types.ObjectId,
    default: null
  }
});

const MachineLandModel = mongoose.model("machine-Land", machineLandSchema);

export { MachineLandModel, machineLandSchema };
