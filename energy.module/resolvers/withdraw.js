import { asyncWrapper } from "../../utils/asyncWrapper";

import { withdraw } from "../actions";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { amount } = args;

  return await withdraw(user.id, amount);
};

export default asyncWrapper(Withdraw);
