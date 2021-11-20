import { asyncWrapper } from "../../utils/asyncWrapper";

import { findByKey as FindMasterLandByKey } from "../../master.module/land/actions";
import { create as CreateLand } from "../actions";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const { masterLandKey } = args;

  const masterLand = await FindMasterLandByKey(masterLandKey);
  if (!masterLand) throw new Error("Not master land found");

  const resources = [];
  for (let i = 0; i < masterLand.masterLandResources.length; i++) {
    const masterLandResource = masterLand.masterLandResources[i];
    resources.push({
      masterResource: masterLandResource.masterResource,
      amount:
        Math.floor(Math.random() * masterLandResource.max) +
        masterLandResource.min,
    });
  }

  const newLand = await CreateLand(user.id, masterLand.key, resources);

  return newLand;

};

export default asyncWrapper(Create);