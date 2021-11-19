import jwt, { decode } from "jsonwebtoken";
import httpStatus from "./httpStatus";
import appConfig from "../config/env";

const requireUser = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), appConfig.jwt_key);

    //TODO: validar la wallet que nos llega

    req.user = {
      id: decoded.userId,
      adress: decoded.adress
    };

    next();
  } catch (err) {
    res.status(httpStatus.FORBIDDEN).json({ err: "FORBIDDEN", token });
  }
};

export default requireUser;
