import mongoose from "mongoose";

const schema = mongoose.Schema;

const partSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  masterPart: {
    type: schema.Types.Number,
    require: true,
  },
  amount: {
    type: schema.Types.Number,
    required: true,
    default: 0,
  },
});

const PartModel = mongoose.model("part", partSchema);

export { PartModel, partSchema };
