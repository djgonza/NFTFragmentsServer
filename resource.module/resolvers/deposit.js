import { deposit } from "../actions";
import { findByKey as FindMasterResourceByKey } from "../../master.module/resource/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Deposit = async (obj, args, context, info) => {
  const { user } = context;
  const { masterResourceKey, amount } = args;

  if (!(await FindMasterResourceByKey(masterResourceKey)))
    throw new Error("Master resource not exists");

  return await deposit(user.id, masterResourceKey, amount);
};

export default asyncWrapper(Deposit);
