import { asyncWrapper } from "../../../utils/asyncWrapper";
import { ActionMasterCreateChampion } from "../action";

const ResolverCreateMasterChampion = async (obj, args, context, info) => {
  const { key, name } = args;
  await ActionMasterCreateChampion(key, name);
  return true;
};

export default asyncWrapper(ResolverCreateMasterChampion);
