import { deposit } from "../actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Deposit = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResource, amount } = args;
  return await deposit(user.id, masterResource, amount);
};

export default asyncWrapper(Deposit);
