import { MasterMachineModel } from "../machine/model";
import { insertAll } from "./actions";

const machines = [
  //TIER 1
  {
    key: 0,
    name: "Drill MK1",
    tier: 1
  },
  {
    key: 1,
    name: "Assembler MK1",
    tier: 1
  },
]

/*const machines = [
  //TIER 1
  {
    key: 0,
    name: "Drill MK1",
    tier: 1
  },
  {
    key: 1,
    name: "Assembler MK1",
    tier: 1
  },
  {
    key: 2,
    name: "Geothermal generator MK1",
    tier: 1
  },
  {
    key: 3,
    name: "Carbon generator MK1",
    tier: 1
  },
  {
    key: 4,
    name: "Fluid extractor MK1",
    tier: 1
  },
  //TIER 2
  {
    key: 5,
    name: "Drill MK2",
    tier: 2
  },
  {
    key: 6,
    name: "Assembler MK2",
    tier: 2
  },
  {
    key: 7,
    name: "Foundry MK1",
    tier: 2
  },
  {
    key: 8,
    name: "Fluid extractor MK2",
    tier: 2
  },
  {
    key: 9,
    name: "Oil Generator MK1",
    tier: 2
  },
  //TIER 3
  {
    key: 10,
    name: "Drill MK3",
    tier: 3
  },
  {
    key: 11,
    name: "Assembler MK3",
    tier: 3
  },
  {
    key: 12,
    name: "Foundry MK2",
    tier: 3
  },
  {
    key: 13,
    name: "Wind generator MK2",
    tier: 3
  },
  //TIER 4
  {
    key: 14,
    name: "Drill MK4",
    tier: 4
  },
  {
    key: 15,
    name: "Assembler MK4",
    tier: 4
  },
  {
    key: 16,
    name: "Foundry MK3",
    tier: 4
  },
  {
    key: 17,
    name: "Solar generator MK1",
    tier: 4
  },
  //TIER 5
  {
    key: 18,
    name: "Drill MK5",
    tier: 5
  },
  {
    key: 19,
    name: "Assembler MK5",
    tier: 5
  },
  {
    key: 20,
    name: "Foundry MK4",
    tier: 5
  },
  {
    key: 21,
    name: "Fluid extractor MK3",
    tier: 5
  },
  {
    key: 22,
    name: "Gas extractor MK1",
    tier: 5
  },
  {
    key: 23,
    name: "Nuclear generator MK1",
    tier: 5
  }
];*/

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
