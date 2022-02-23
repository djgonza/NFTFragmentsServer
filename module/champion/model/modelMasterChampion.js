import { model, Schema } from "mongoose";

export default model(
  "MasterChampion",
  new Schema({
    key: {
      type: Schema.Types.Number,
      require: true,
    },
    name: {
      type: Schema.Types.String,
      require: true,
    },
  })
);
