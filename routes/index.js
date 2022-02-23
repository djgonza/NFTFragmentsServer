import express from "express";
import graphql from "./graphql";
import userRoutes from "./user";

const mainRouter = express.Router();

mainRouter.use("/graphql", graphql);
mainRouter.use("/user", userRoutes);


export default mainRouter;
