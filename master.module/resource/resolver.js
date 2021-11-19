import { find } from "./actions";

const resolver = {
  Query: {
    masterResources: async () => await find(),
  },
};

export default resolver;
