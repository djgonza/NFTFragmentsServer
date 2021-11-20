import { deposit } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Deposit = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResourceId, amount } = args;
  return await deposit(user.id, masterResourceId, amount);
};

export default asyncWrapper(Deposit);
