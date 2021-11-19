import express from "express";
import graphql from "./graphql";

const mainRouter = express.Router();

mainRouter.use("/graphql", graphql);

export default mainRouter;
