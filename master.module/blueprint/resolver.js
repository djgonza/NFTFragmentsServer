import { find } from "./actions";
import { findByKey as FindMasterMachineByKey } from "../machine/actions";
import { findByKey as FindMasterPartByKey } from "../part/actions";

const resolver = {
  Query: {
    masterBlueprints: async () => await find(),
  },
  MasterBlueprint: {
    masterMachineOutput: async (masterBlueprint) => {
      console.log("masterBlueprint", masterBlueprint);
      return await FindMasterMachineByKey(masterBlueprint.masterMachineOutput);
    },
  },
  MasterBlueprintPartsAmount: {
    masterPartData: async (masterBlueprintPartsAmount) => {
        return await FindMasterPartByKey(masterBlueprintPartsAmount.masterPart);
    },
  },
};

export default resolver;
