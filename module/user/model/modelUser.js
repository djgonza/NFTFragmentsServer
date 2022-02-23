import { model, Schema } from "mongoose";

export default model(
  "User",
  new Schema({
    address: {
      type: Schema.Types.String,
      require: true,
    }
  })
);
