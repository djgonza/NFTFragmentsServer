import express from "express";

import Resources from "../data/resources";
import ResourcesAmount from "../data/resourcesAmount";
import ResourcesMinMax from "../data/resourcesMinMax";
import Recipes from "../data/recipes";
import Machines from "../data/machines";
import MachinesRecipes from "../data/machinesRecipes";
import Lands from "../data/lands";

const router = express.Router();

router.post("/resources", Resources);
router.post("/resourcesAmount", ResourcesAmount);
router.post("/resourcesMinMax", ResourcesMinMax);
router.post("/recipes", Recipes);
router.post("/machines", Machines);
router.post("/machinesRecipes", MachinesRecipes);
router.post("/lands", Lands);

export default router;
