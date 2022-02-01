import { find } from "./actions";
import { findByKey as FindMasterResourceByKey } from "../resource/actions";
import { findByKey as FindMasterPartByKey } from "../part/actions";

const resolver = {
  Query: {
    masterTechnologies: async () => await find(),
  },
  MasterTechnology: {
    parents: async (masterTechnology) =>
      await find({
        key: { $in: masterTechnology.parents },
      }),
  },
  MasterTechnologyResourceAmount: {
    masterResourceData: async (masterTechnologyResourceAmount) => {
      return await FindMasterResourceByKey(
        masterTechnologyResourceAmount.masterResource
      );
    },
  },
  MasterTechnologyPartAmount: {
    masterPartData: async (masterTechnologyPartAmount) => {
      return await FindMasterPartByKey(masterTechnologyPartAmount.masterPart);
    },
  },
};

export default resolver;
