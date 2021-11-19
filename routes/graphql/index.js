import express from "express";

import Schema from '../../schema.module'
import requireUser from "../../utils/requireUser";
import mastersInsert from "../../master.module/data/router";

const graphqlRoutes = express.Router();

graphqlRoutes.use("/mastersInsert", requireUser, mastersInsert);
graphqlRoutes.use("/", requireUser, Schema);

export default graphqlRoutes;
