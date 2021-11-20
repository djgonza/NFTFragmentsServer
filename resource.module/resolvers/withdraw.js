import { withdraw } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResourceId, amount } = args;
  return await withdraw(user.id, masterResourceId, amount);
};

export default asyncWrapper(Withdraw);
