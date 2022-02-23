import Require from "../../../utils/require";
import ModelUser from "../model";


export default async function ActionUserExists(address){
    const user = await ModelUser.find({address});
    Require(!user, "User not exists");
}