import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const masterResourceAmountCost = {
  masterResource: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const masterPartAmountCost = {
  masterPart: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    require: true,
  },
};

const MasterTechnology = new Schema({
  key: {
    type: schema.Types.Number,
    require: true,
  },
  name: {
    type: schema.Types.String,
    require: true,
  },
  parents: [
    {
      type: schema.Types.Number,
      require: true,
    },
  ],
  masterResourcesAmountCost: [masterResourceAmountCost],
  masterPartsAmountCost: [masterPartAmountCost],
});

const MasterTechnologyModel = mongoose.model(
  "Master-Technology",
  MasterTechnology
);

export { MasterTechnologyModel, MasterTechnology };
