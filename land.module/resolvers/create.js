import { LandModel } from "../models";
import { findByKey as FindMasterLandByKey } from "../../master.module/land/actions";
import { find as FindMasterResourceMinMax } from "../../master.module/resourcesMinMax/actions";
import { create as CreateResourceAmount } from "../../resourceAmount.module/actions";
import { asyncWrapper } from "../../utils/asyncWrapper";

const Create = async (obj, args, context, info) => {
  const { user } = context;
  const { master } = args;

  const masterLand = await FindMasterLandByKey(master);
  if (!masterLand) throw new Error("Not master land found");

  const masterResourcesMinMax = await FindMasterResourceMinMax({
    master: masterLand.key,
  });
  if (!masterResourcesMinMax)
    throw new Error("Not master resources min max found");

  const newLandModel = new LandModel({
    user: user.id,
    master,
  });

  await newLandModel.save();
  await generateRandomResources(
    user.id,
    newLandModel._id,
    masterResourcesMinMax
  );

  return newLandModel;
};

export default asyncWrapper(Create);

async function generateRandomResources(user, element, masterResourcesMinMax) {
  for (let i = 0; i < masterResourcesMinMax.length; i++) {
    const masterResourceMinMax = masterResourcesMinMax[i];
    const amount =
      Math.floor(Math.random() * masterResourceMinMax.max) +
      masterResourceMinMax.min;

    await CreateResourceAmount(
      user,
      element,
      masterResourceMinMax.resource,
      amount
    );
  }
}
