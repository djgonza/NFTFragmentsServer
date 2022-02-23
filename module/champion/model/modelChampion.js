import { model, Schema } from "mongoose";

export default model(
  "Champion",
  new Schema({
    netID: {
      type: Schema.Types.Number,
      require: true,
    },
    owner: {
      type: Schema.Types.String,
      require: true,
    },
    master: {
      type: Schema.Types.Number,
      require: true,
    },
  })
);
