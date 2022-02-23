import Require from "../../../utils/require";
import ActionGetUserByAddress from "../../user/action";

import { ModelChampion, ModelMasterChampion } from "../model";


export default async function ActionCreateChampion(netID, owner, masterKey) {

    const masterChampion = await ModelMasterChampion.find({ key: masterKey });
    Require(masterChampion, "Not master champion found");

    const user = await ActionGetUserByAddress(owner);
    Require(user, "Owner not found");

    const newChampion = new ModelChampion({
        netID,
        owner,
        masterKey
    });

    await newChampion.save();

}