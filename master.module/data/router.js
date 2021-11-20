import express from "express";

import Resources from "../data/resources";
import Recipes from "../data/recipes";
import Machines from "../data/machines";
import MachinesRecipes from "../data/machinesRecipes";
import Lands from "../data/lands";

import Parts from "../data/parts";
import PartRecipe from "../data/partRecipe";
import Blueprints from "../data/blueprints";


const router = express.Router();

router.post("/resources", Resources);
router.post("/recipes", Recipes);
router.post("/machines", Machines);
router.post("/machinesRecipes", MachinesRecipes);
router.post("/lands", Lands);

router.post("/parts", Parts);
router.post("/partsRecipe", PartRecipe);
router.post("/blueprints", Blueprints);

export default router;
