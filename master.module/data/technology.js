import { MasterTechnologyModel } from "../technology/model";
import { insertAll } from "./actions";

const technologies = [
  {
    key: 0,
    name: "Energy 1",
    parents: [],
    masterResourcesAmountCost: [
      {
        masterResource: 0,
        amount: 10,
      },
    ],
    masterPartsAmountCost: [],
  },
  {
    key: 1,
    name: "Energy 2",
    parents: [0],
    masterResourcesAmountCost: [
      {
        masterResource: 0,
        amount: 10,
      },
    ],
    masterPartsAmountCost: [
      {
        masterPart: 0,
        amount: 10,
      },
    ],
  },
  {
    key: 2,
    name: "Energy 3",
    parents: [1],
    masterResourcesAmountCost: [
      {
        masterResource: 0,
        amount: 10,
      },
    ],
    masterPartsAmountCost: [
      {
        masterPart: 0,
        amount: 0,
      },
    ],
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(technologies, MasterTechnologyModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}