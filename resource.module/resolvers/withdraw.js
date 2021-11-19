import { withdraw } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResource, amount } = args;
  return await withdraw(user.id, masterResource, amount);
};

export default asyncWrapper(Withdraw);
