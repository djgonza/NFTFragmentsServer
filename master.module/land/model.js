import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterLandResourceAmountMinMax = {
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  min: {
    type: schema.Types.Number,
    require: true,
  },
  max: {
    type: schema.Types.Number,
    require: true,
  },
};

const MasterLandSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  masterLandResources: [MasterLandResourceAmountMinMax],
});

const MasterLandModel = mongoose.model("Master-Land", MasterLandSchema);

export { MasterLandModel, MasterLandSchema };
