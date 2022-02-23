import { asyncWrapper } from "../../../utils/asyncWrapper";
import { ActionFindMasterChampions } from "../action";

const ResolverMasterChampions = async (obj, args, context, info) => {
  return await ActionFindMasterChampions();
};

export default asyncWrapper(ResolverMasterChampions);
