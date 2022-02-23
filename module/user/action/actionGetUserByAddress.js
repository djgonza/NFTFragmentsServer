import { ModelUser } from "../model";

export default async function ActionGetUserByAddress(address) {
  return await ModelUser.findOne({ address });
}
