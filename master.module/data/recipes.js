import { MasterRecipeModel } from "../recipe/model";
import { insertAll } from "./actions";

const recipes = [
  {
    key: 0,
    name: "Enegy",
    time: 10000,
    machine: 0,
    withdrawResourcesOfLand: false,
    masterInput: null,
    masterOutput: 0
  },
  {
    key: 1,
    name: "Copper 2",
    time: 10000,
    machine: 1,
    withdrawResourcesOfLand: false,
    masterInput: 0,
    masterOutput: 2
  }
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(recipes, MasterRecipeModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
