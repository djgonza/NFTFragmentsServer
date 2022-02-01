import { deposit } from "../actions";
import { findByKey as FindMasterPartByKey } from "../../master.module/part/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Deposit = async (obj, args, context, info) => {
  const { user } = context;
  const { masterPartKey, amount } = args;

  if (!(await FindMasterPartByKey(masterPartKey)))
    throw new Error("Master part not exists");
    
  return await deposit(user.id, masterPartKey, amount);
};

export default asyncWrapper(Deposit);
