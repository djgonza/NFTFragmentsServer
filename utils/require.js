import ErrorRequire from "../errors/errorRequire";

export default function Require(condition, message) {
    if(!condition) throw new ErrorRequire(message);
}