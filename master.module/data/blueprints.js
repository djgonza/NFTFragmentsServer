
import { MasterBlueprintModel } from "../blueprint/model";
import { insertAll } from "./actions";

const blueprints = [
  {
    key: 0,
    name: "Drill mk1",
    masterPartsInput: [
      {
        masterPart: 0,
        amount: 5,
      },
    ],
    masterMachineOutput: 1,
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(blueprints, MasterBlueprintModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
