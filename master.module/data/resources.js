import { MasterResourceModel } from "../resource/model";
import { insertAll } from "./actions";

const resources = [
  //TIER 1
  {
    key: 0,
    name: "Organic Material",
    symbol: "E",
    color: "#FFD600"
  },
  {
    key: 1,
    name: "Copper",
    symbol: "Cu",
    color: "#BF360C"
  },
  {
    key: 2,
    name: "Iron",
    symbol: "Fe",
    color: "#BF360C"
  },
  {
    key: 3,
    name: "Coal",
    symbol: "C",
    color: "#BF360C"
  },
  {
    key: 4,
    name: "Water",
    symbol: "H2O",
    color: "#BF360C"
  },
  //TIER 2
  {
    key: 5,
    name: "Tin",
    symbol: "CU",
    color: "#BF360C"
  },
  {
    key: 6,
    name: "Steel",
    symbol: "FeC",
    color: "#BF360C"
  },
  {
    key: 7,
    name: "Oil",
    symbol: "CnH2n",
    color: "#BF360C"
  },
  {
    key: 8,
    name: "Bauxite",
    symbol: "Al2O3",
    color: "#BF360C"
  },
  //TIER 3
  {
    key: 9,
    name: "Gold",
    symbol: "Au",
    color: "#BF360C"
  },
  {
    key: 10,
    name: "Silver",
    symbol: "Ag",
    color: "#BF360C"
  },
  {
    key: 11,
    name: "Aluminum",
    symbol: "Al",
    color: "#BF360C"
  },
  {
    key: 12,
    name: "Bronze",
    symbol: "CuSn",
    color: "#BF360C"
  },
  //TIER 4
  {
    key: 13,
    name: "Diamond",
    symbol: "C",
    color: "#BF360C"
  },
  {
    key: 14,
    name: "Quartz",
    symbol: "SiO2",
    color: "#BF360C"
  },
  //TIER 5
  {
    key: 15,
    name: "Uranium",
    symbol: "U",
    color: "#BF360C"
  },
  {
    key: 16,
    name: "Natural gas",
    symbol: "Ch4",
    color: "#BF360C"
  },
  {
    key: 17,
    name: "Nitrogen",
    symbol: "N",
    color: "#BF360C"
  },
  {
    key: 18,
    name: "Sulfur",
    symbol: "S",
    color: "#BF360C"
  }
];

export default insert;

async function insert(req, res, next) {
  try {
    await insertAll(resources, MasterResourceModel);
    res.send({ ok: true });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
}
