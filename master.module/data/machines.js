import { MasterMachineModel } from "../machine/model";
import { insertAll } from "./actions";

const machines = [
  {
    key: 0,
    name: "Drill MK1",
    tier: 1,
    masterMachineRecipes: [0],
  },
  {
    key: 1,
    name: "Assembler MK1",
    tier: 1,
    masterMachineRecipes: [0, 1],
  },
];


export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(machines, MasterMachineModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
