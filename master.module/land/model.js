import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterLandSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  masterResources: {
    type: schema.Types.Number,
    require: true,
  },
});

const MasterLandModel = mongoose.model("Master-Land", MasterLandSchema);

export { MasterLandModel, MasterLandSchema };
