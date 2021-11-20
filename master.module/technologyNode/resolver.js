import { find } from "./actions";

const resolver = {
  Query: {
    masterTechnologyNodes: async () => await find(),
  },
};

export default resolver;
