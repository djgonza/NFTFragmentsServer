import { ModelUser } from "../model";
import httpStatus from "../../../utils/httpStatus";

export default async function ActionRegisterUser(req, res, next) {
  const { address } = req.body;

  ModelUser.find({ address })
    .exec()
    .then(async (user) => {
      if (user.length >= 1) {
        return res.status(httpStatus.CONFLICT).json({
          message: "Address already exists",
        });
      } else {
        const newUser = await ModelUser.create({
          address,
        });
        return res.status(httpStatus.CREATED).json({ data: { user: newUser } });
      }
    });
}
