import { ModelChampion } from "../model";

export default async function ActionFindMasterChampions(owner) {
  return await ModelChampion.find({ owner });
}
