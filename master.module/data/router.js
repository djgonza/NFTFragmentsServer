import express from "express";

import Resources from "../data/resources";
import Machines from "../data/machines";
import MachineRecipes from "../data/machineRecipes";
import Lands from "../data/lands";

import Parts from "../data/parts";
import PartRecipe from "../data/partRecipe";
import Blueprints from "../data/blueprints";
import Technology from "../data/technology";

const router = express.Router();

router.post("/resources", Resources);
router.post("/machines", Machines);
router.post("/machinesRecipes", MachineRecipes);
router.post("/lands", Lands);
router.post("/parts", Parts);
router.post("/partsRecipe", PartRecipe);
router.post("/blueprints", Blueprints);
router.post("/technologies", Technology);

export default router;
