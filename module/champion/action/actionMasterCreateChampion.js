import ModelMasterChampion from "../model/modelMasterChampion";


export default async function ActionMasterCreateChampion (key, name) {
  
   const newMasterChampion = new ModelMasterChampion({
       key,
       name
   });

   await newMasterChampion.save();

};