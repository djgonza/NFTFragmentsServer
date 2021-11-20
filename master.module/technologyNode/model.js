import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const MasterTechnologyNode = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  parent: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  cost: {
    type: schema.Types.Number,
    require: true,
  },
});

const MasterTechnologyNodeModel = mongoose.model(
  "Master-Technology-Node",
  MasterTechnologyNode
);

export { MasterTechnologyNodeModel, MasterTechnologyNode };
