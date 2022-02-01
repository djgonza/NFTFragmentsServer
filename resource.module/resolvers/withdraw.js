import { withdraw, hasResourceAmount } from "../actions";
import { findByKey as FindMasterResourceByKey } from "../../master.module/resource/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResourceKey, amount } = args;

  if (!(await FindMasterResourceByKey(masterResourceKey)))
    throw new Error("Master resource not exists");

  if (!(await hasResourceAmount(user.id, masterResourceKey, amount)))
    throw new Error("Not has resource amount");

  return await withdraw(user.id, masterResourceKey, amount);
};

export default asyncWrapper(Withdraw);
