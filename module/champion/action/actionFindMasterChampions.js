import { ModelMasterChampion } from "../model";

export default async function ActionFindMasterChampions() {
  return await ModelMasterChampion.find();
}
