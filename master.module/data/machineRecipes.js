import { MasterMachineRecipeModel } from "../machineRecipe/model";
import { insertAll } from "./actions";

const recipes = [
  {
    key: 0,
    name: "Enegy",
    time: 10000,
    energyInput: 0,
    energyOutput: 10,
    masterResourcesInput: [],
    masterResourcesOutput: [],
  },
  {
    key: 1,
    name: "Copper 2",
    time: 10000,
    energyInput: 10,
    energyOutput: 0,
    masterResourcesInput: [],
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
