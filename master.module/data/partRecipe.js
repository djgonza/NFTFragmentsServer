import { MasterPartRecipeModel } from "../partRecipe/model";
import { insertAll } from "./actions";

const partRecipes = [
  {
    key: 0,
    name: "Copper tube 1",
    masterPartsInput: [],
    masterResourcesInput: [
      {
        masterResource: 1,
        amount: 10,
      },
    ],
    masterPartOutput: {
      masterPart: 0,
      amount: 2,
    },
  },
  {
    key: 1,
    name: "Iron ingot 1",
    masterPartsInput: [],
    masterResourcesInput: [
      {
        masterResource: 2,
        amount: 5,
      },
    ],
    masterPartOutput: {
      masterPart: 1,
      amount: 5,
    },
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(partRecipes, MasterPartRecipeModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
