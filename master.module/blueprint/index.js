
import { join } from "path";
import loadSchema from "../../utils/loadSchema";
import resolvers from "./resolver";

const typeDefs = loadSchema(join(__dirname, "./type.graphql"));

export { typeDefs, resolvers };