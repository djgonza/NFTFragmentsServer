import { MasterTechnologyNodeModel } from "../technologyNode/model";
import { insertAll } from "./actions";

const nodes = [
    {
        key: 0,
        parent: null,
        name: "Energy 1"
    },
    
]

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(nodes, MasterTechnologyNodeModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}