import { MasterPartModel } from "../part/model";
import { insertAll } from "./actions";

const parts = [
  {
    key: 0,
    name: "Copper tube",
    masterPartRecipes: [0],
  },
  {
    key: 1,
    name: "Iron ingot",
    masterPartRecipes: [1],
  },
  {
    key: 2,
    name: "Copper ingot",
    masterPartRecipes: [0],
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(parts, MasterPartModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
