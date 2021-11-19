import express, { json } from "express";
import morgan from "morgan";
import mainRouter from "./routes";
import connectMongo from "./config/mongoconnect";

const app = express();
// Production enviroment
const isProduction = process.env.NODE_ENV === "production";
app.use(json());

//https debug
app.use(morgan("dev"));

//Connect Mongo
connectMongo();

app.use("/", mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on isProductionss => ${isProduction}`);
  console.log(`Server is running on PORT ${PORT}`);
});
