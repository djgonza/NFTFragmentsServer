import resolverMasterChampions from "./resolverMasterChampions";
import resolverChampions from "./resolverChampions";
import ActionFindMasterChampion from "../action";

const resolvers = {
  Query: {
    masterChampions: resolverMasterChampions,
    champions: resolverChampions,
  },
  Champion: {
    master: async (champion) => {
      return await ActionFindMasterChampion(champion.master);
    },
  },
  Mutation: {
    masterCreateChampion: () => {},
    createChampion: () => {},
    deleteChampion: () => {},
    transferChampion: () => {},
  },
};

export default resolvers;
