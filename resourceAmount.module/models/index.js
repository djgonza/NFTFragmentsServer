import mongoose from "mongoose";

const schema = mongoose.Schema;

const resourcesAmountSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  master: {
    type: schema.Types.Number,
    require: true,
  },
  element: {
    type: schema.Types.ObjectId,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    required: true,
    default: 0,
  },
});

const ResourcesAmountModel = mongoose.model(
  "resource-amount",
  resourcesAmountSchema
);

export { ResourcesAmountModel, resourcesAmountSchema };
