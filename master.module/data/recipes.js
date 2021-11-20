import { MasterMachineRecipeModel } from "../machineRecipe/model";
import { insertAll } from "./actions";

const recipes = [
  {
    key: 0,
    name: "Enegy",
    time: 10000,
    withdrawResourcesOfLand: false,
    masterResourcesInput: [],
    masterResourcesOutput: [
      {
        masterResource: 0,
        amount: 10,
      },
    ],
  },
  {
    key: 1,
    name: "Copper 2",
    time: 10000,
    withdrawResourcesOfLand: false,
    masterResourcesInput: [
      {
        masterResource: 0,
        amount: 5,
      },
    ],
    masterResourcesOutput: [
      {
        masterResource: 1,
        amount: 10,
      },
    ],
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(recipes, MasterMachineRecipeModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
