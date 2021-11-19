import { MasterMachineRecipeModel } from "../machineRecipe/model";
import { insertAll } from "./actions";

const machinesRecipes = [
  {
    key: 0,
    recipe: 0,
    machine: 0,
  },
  {
    key: 1,
    recipe: 1,
    machine: 1,
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(machinesRecipes, MasterMachineRecipeModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
