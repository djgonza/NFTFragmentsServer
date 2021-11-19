import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterResourceSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true
  },
  name: {
    type: schema.Types.String,
    require: true
  },
  symbol: {
    type: schema.Types.String,
    require: true
  },
  color: {
    type: schema.Types.String,
    require: true
  }
});

const MasterResourceModel = mongoose.model(
  "Master-Resource",
  MasterResourceSchema
);

export { MasterResourceModel, MasterResourceSchema };
