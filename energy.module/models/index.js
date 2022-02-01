import mongoose from "mongoose";

const schema = mongoose.Schema;

const energySchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    default: 0
  },
});

const EnergyModel = mongoose.model("energy", energySchema);

export { EnergyModel, energySchema };
