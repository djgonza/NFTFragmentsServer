import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const MasterResourcesMinMax = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  master: {
    type: schema.Types.Number,
    require: true,
  },
  resource: {
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
});

const MasterResourceMinMaxModel = mongoose.model(
  "Master-Resources-MinMax",
  MasterResourcesMinMax
);

export { MasterResourceMinMaxModel, MasterResourcesMinMax };
