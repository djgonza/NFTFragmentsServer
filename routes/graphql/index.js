import express from "express";

import Schema from '../../schema.module'
import requireUser from "../../utils/requireUser";

const graphqlRoutes = express.Router();

graphqlRoutes.use("/", requireUser, Schema);

export default graphqlRoutes;
