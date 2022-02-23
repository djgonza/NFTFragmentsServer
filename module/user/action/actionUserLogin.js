import { ModelUser } from "../model";
import httpStatus from "../../../utils/httpStatus";

export default async function ActionUserLogin(req, res, next) {
  const { address } = req.body;

  ModelUser.find({ address })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(httpStatus.UNAUTHORIZED).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        {
          adress: user[0].adress,
          userId: user[0].id,
        },
        appConfig.jwt_key,
        {
          expiresIn: appConfig.jwt_expiration,
        }
      );
      return res.status(httpStatus.OK).json({
        message: "Auth successfully",
        token: token,
      });
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      });
    });
}
