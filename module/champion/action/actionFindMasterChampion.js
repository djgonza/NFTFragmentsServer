import { ModelMasterChampion } from "../model";

export default async function ActionFindMasterChampion(key) {
  return await ModelMasterChampion.findOne({ key });
}
