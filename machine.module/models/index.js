import mongoose from "mongoose";

const schema = mongoose.Schema;

const machineSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  masterMachine: {
    type: schema.Types.Number,
    require: true,
  },
  masterRecipe: {
    type: schema.Types.Number,
    default: null,
  },
  running: {
    type: schema.Types.Boolean,
    required: true,
    default: false,
  },
  endDate: {
    type: schema.Types.Number,
    required: true,
    default: 0,
  },
});

const MachineModel = mongoose.model("machine", machineSchema);

export { MachineModel, machineSchema };
