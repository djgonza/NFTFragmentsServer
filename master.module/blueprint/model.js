import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const masterPartInput = {
  masterPart: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const MasterBlueprint = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  masterPartsInput: [masterPartInput],
  masterMachineOutput: {
    type: schema.Types.Number,
    require: true,
  },
});

const MasterBlueprintModel = mongoose.model(
  "Master-Blueprint",
  MasterBlueprint
);

export { MasterBlueprintModel, MasterBlueprint };
