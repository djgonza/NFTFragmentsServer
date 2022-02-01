import mongoose from "mongoose";

const schema = mongoose.Schema;

const technologySchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    require: true,
  },
  masterTechnology: {
    type: schema.Types.Number,
    require: true,
  }
});

const TechnologyModel = mongoose.model("technology", technologySchema);

export { TechnologyModel, technologySchema };
