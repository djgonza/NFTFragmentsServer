import { withdraw, hasPartAmount } from "../actions";
import { findByKey as FindMasterPartByKey } from "../../master.module/part/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Withdraw = async (obj, args, context, info) => {
  const { user } = context;
  const { masterPartKey, amount } = args;

  if (!(await FindMasterPartByKey(masterPartKey)))
    throw new Error("Master part not exists");

  if (!(await hasPartAmount(user.id, masterPartKey, amount)))
    throw new Error("Not has part amount");
    
  return await withdraw(user.id, masterPartKey, amount);
};

export default asyncWrapper(Withdraw);
