import { MasterResourceAmountModel } from "../resourceAmount/model";
import { insertAll } from "./actions";

const resourceAmount = [
  {
    key: 0,
    master: 0,
    masterResource: 0,
    amount: 5,
  },
  {
    key: 1,
    master: 1,
    masterResource: 1,
    amount: 10,
  },
  {
    key: 2,
    master: 2,
    masterResource: 1,
    amount: 10,
  },
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(resourceAmount, MasterResourceAmountModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
