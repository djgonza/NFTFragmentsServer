import { unlockTechnology, findByKey as FindTechnologyByKey } from "../actions";
import { findByKey as FindMasterTechologyByKey } from "../../master.module/technology/actions";
import {
  withdraw as WithdrawResource,
  hasResourceAmount as HasResourceAmount,
} from "../../resource.module/actions";
import {
  withdraw as WithdrawPart,
  hasPartAmount as HasPartAmount,
} from "../../part.module/actions";

const UnlockTechnology = async (obj, args, context, info) => {
  const { user } = context;
  const { masterTechnologyKey } = args;

  const masterTechnology = await FindMasterTechologyByKey(masterTechnologyKey);
  if (!masterTechnology) throw new Error("Technology not exists");
  if (await FindTechnologyByKey(user.id, masterTechnologyKey))
    throw new Error("Technology already unlocked");

  if (!(await hasUnlockedParents(user.id, masterTechnology.parents)))
    throw new Error("Not techlogy parent unlocked");

  if (
    !(await hasResourcesAmount(
      user.id,
      masterTechnology.masterResourcesAmountCost
    ))
  )
    throw new Error("Not have resources amount");

  if (!(await hasPartsAmount(user.id, masterTechnology.masterPartsAmountCost)))
    throw new Error("Not have parts amount");

  await withdrawResourcesToUnlock(
    user.id,
    masterTechnology.masterResourcesAmountCost
  );
  await withdrawPartsToUnlock(user.id, masterTechnology.masterPartsAmountCost);
  return await unlockTechnology(user.id, masterTechnologyKey);
};

async function hasUnlockedParents(user, masterTechnologyParents) {
  for (let i = 0; i < masterTechnologyParents.length; i++) {
    const masterParentKey = masterTechnologyParents[i];
    if (!(await FindTechnologyByKey(user, masterParentKey))) return false;
  }
  return true;
}

async function hasPartsAmount(user, masterPartsAmountCost) {
  for (let i = 0; i < masterPartsAmountCost.length; i++) {
    const masterPartAmountCost = masterPartsAmountCost[i];
    if (
      !(await HasPartAmount(
        user,
        masterPartAmountCost.masterPart,
        masterPartAmountCost.amount
      ))
    )
      return false;
  }
  return true;
}

async function hasResourcesAmount(user, masterResourcesAmountCost) {
  for (let i = 0; i < masterResourcesAmountCost.length; i++) {
    const masterResourceAmountCost = masterResourcesAmountCost[i];
    if (
      !(await HasResourceAmount(
        user,
        masterResourceAmountCost.masterResource,
        masterResourceAmountCost.amount
      ))
    )
      throw new Error("Not have resources amount");
  }
  return true;
}

async function withdrawResourcesToUnlock(user, masterResourcesAmount) {
    for (let i = 0; i < masterResourcesAmount.length; i++) {
      const masterResourceAmount = masterResourcesAmount[i];
      await WithdrawResource(
        user,
        masterResourceAmount.masterResource,
        masterResourceAmount.amount);
    }
}

async function withdrawPartsToUnlock(user, masterPartsAmount) {
    for (let i = 0; i < masterPartsAmount.length; i++) {
      const masterPartAmount = masterPartsAmount[i];
      await WithdrawPart(
        user,
        masterPartAmount.masterPart,
        masterPartAmount.amount
      );
    }
}

export default UnlockTechnology;
