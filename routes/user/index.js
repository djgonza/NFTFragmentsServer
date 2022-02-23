import express from "express";
import ActionRegisterUser from "../../module/user/action/actionRegisterUser";
import ActionUserLogin from "../../module/user/action/actionUserLogin";

const userRoutes = express.Router();

userRoutes.use("/register", ActionRegisterUser);
userRoutes.use("/login", ActionUserLogin);

export default userRoutes;