import { MasterLandModel } from "../land/model";
import { insertAll } from "./actions";

const lands = [
  {
    key: 0,
    name: "Land 1",
    masterResources: 0,
  },
  {
    key: 1,
    name: "Land V2",
    masterResources: 1,
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
