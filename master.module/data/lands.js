import { MasterLandModel } from "../land/model";
import { insertAll } from "./actions";

const lands = [
  {
    key: 0,
    name: "Land 1",
    masterLandResources: [
      {
        masterResource: 1,
        min: 1000,
        max: 2000,
      },
      {
        masterResource: 2,
        min: 1000,
        max: 2000,
      },
      {
        masterResource: 3,
        min: 1000,
        max: 2000,
      },
    ],
  },
  {
    key: 1,
    name: "Land V2",
    masterLandResources: [
      {
        masterResource: 4,
        min: 1000,
        max: 2000,
      },
      {
        masterResource: 5,
        min: 1000,
        max: 2000,
      },
      {
        masterResource: 6,
        min: 1000,
        max: 2000,
      },
    ],
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(lands, MasterLandModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
