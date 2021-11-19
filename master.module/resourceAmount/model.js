import mongoose from "mongoose";

const schema = mongoose.Schema;

const MasterResourceAmountSchema = new schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  master: {
    type: schema.Types.Number,
    require: true,
  },
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
});

const MasterResourceAmountModel = mongoose.model(
  "Master-Resource-Amount",
  MasterResourceAmountSchema
);

export { MasterResourceAmountModel, MasterResourceAmountSchema };
