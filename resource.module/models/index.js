import mongoose from "mongoose";

const schema = mongoose.Schema;

const resourceSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true
  },
  master: {
    type: schema.Types.Number,
    require: true
  },
  amount: {
    type: schema.Types.Number,
    required: true,
    default: 0
  }
});

const ResourceModel = mongoose.model("resource", resourceSchema);

export { ResourceModel, resourceSchema };
