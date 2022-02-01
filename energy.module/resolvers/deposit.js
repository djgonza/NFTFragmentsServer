import { asyncWrapper } from "../../utils/asyncWrapper";

import { deposit } from "../actions";

const Deposit = async (obj, args, context, info) => {
  const { user } = context;
  const { amount } = args;

    return await deposit(user.id, amount);

};

export default asyncWrapper(Deposit);
