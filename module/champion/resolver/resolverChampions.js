import { asyncWrapper } from "../../../utils/asyncWrapper";
import { ActionUserExists } from "../../user/action";
import { ActionFindChampions } from "../action";

const ResolverChampions = async (obj, args, context, info) => {
  const { user } = context;
  await ActionUserExists(user.address);
  return await ActionFindChampions(user.address);
};

export default asyncWrapper(ResolverChampions);
