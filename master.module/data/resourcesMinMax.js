import { MasterResourceMinMaxModel } from "../resourcesMinMax/model";
import { insertAll } from "./actions";

const resourcesMinMax = [
  {
    key: 0,
    master: 0,
    resource: 0,
    min: 100,
    max: 100,
  },
  {
    key: 1,
    master: 0,
    resource: 1,
    min: 50,
    max: 50,
  },
  {
    key: 2,
    master: 1,
    resource: 3,
    min: 100,
    max: 100,
  },
  {
    key: 3,
    master: 1,
    resource: 4,
    min: 50,
    max: 50,
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(resourcesMinMax, MasterResourceMinMaxModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({err: error})
  }
}
