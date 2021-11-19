// import {
//   insert as ResourceInsert,
//   clear as ResourceClear,
// } from "../resource/resourceMaster.model.js";
// import {
//   insert as MachineMasterInsert,
//   clear as MachineMasterClear,
// } from "../machine/machineMaster.model";
// import {
//   insert as RecipeMasterInsert,
//   clear as RecipeMasterClear,
// } from "../recipe/recipeMaster.model";

// import {
//   insert as RecipeMachineMasterInsert,
//   clear as RecipeMachineMasterClear,
// } from "../recipeMachine/recipeMachineMaster.model";

// import {
//   insert as LandMasterInsert,
//   clear as LandMasterClear,
// } from "../land/landMaster.model";

// const resources = [
//   //TIER 1
//   {
//     key: 0,
//     name: "Energy",
//     symbol: "E",
//     color: "#FFD600",
//   },
//   {
//     key: 1,
//     name: "Copper",
//     symbol: "Cu",
//     color: "#BF360C",
//   },
//   {
//     key: 2,
//     name: "Iron",
//     symbol: "Fe",
//     color: "#BF360C",
//   },
//   {
//     key: 3,
//     name: "Coal",
//     symbol: "C",
//     color: "#BF360C",
//   },
//   {
//     key: 4,
//     name: "Water",
//     symbol: "H2O",
//     color: "#BF360C",
//   },
//   //TIER 2
//   {
//     key: 5,
//     name: "Tin",
//     symbol: "CU",
//     color: "#BF360C",
//   },
//   {
//     key: 6,
//     name: "Steel",
//     symbol: "FeC",
//     color: "#BF360C",
//   },
//   {
//     key: 7,
//     name: "Oil",
//     symbol: "CnH2n",
//     color: "#BF360C",
//   },
//   {
//     key: 8,
//     name: "Bauxite",
//     symbol: "Al2O3",
//     color: "#BF360C",
//   },
//   //TIER 3
//   {
//     key: 9,
//     name: "Gold",
//     symbol: "Au",
//     color: "#BF360C",
//   },
//   {
//     key: 10,
//     name: "Silver",
//     symbol: "Ag",
//     color: "#BF360C",
//   },
//   {
//     key: 11,
//     name: "Aluminum",
//     symbol: "Al",
//     color: "#BF360C",
//   },
//   {
//     key: 12,
//     name: "Bronze",
//     symbol: "CuSn",
//     color: "#BF360C",
//   },
//   //TIER 4
//   {
//     key: 13,
//     name: "Diamond",
//     symbol: "C",
//     color: "#BF360C",
//   },
//   {
//     key: 14,
//     name: "Quartz",
//     symbol: "SiO2",
//     color: "#BF360C",
//   },
//   //TIER 5
//   {
//     key: 15,
//     name: "Uranium",
//     symbol: "U",
//     color: "#BF360C",
//   },
//   {
//     key: 16,
//     name: "Natural gas",
//     symbol: "Ch4",
//     color: "#BF360C",
//   },
//   {
//     key: 17,
//     name: "Nitrogen",
//     symbol: "N",
//     color: "#BF360C",
//   },
//   {
//     key: 18,
//     name: "Sulfur",
//     symbol: "S",
//     color: "#BF360C",
//   },
// ];

// const machines = [
//   //TIER 1
//   {
//     key: 0,
//     name: "Drill MK1",
//     tier: 1,
//   },
//   {
//     key: 1,
//     name: "Assembler MK1",
//     tier: 1,
//   },
//   {
//     key: 2,
//     name: "Geothermal generator MK1",
//     tier: 1,
//   },
//   {
//     key: 3,
//     name: "Carbon generator MK1",
//     tier: 1,
//   },
//   {
//     key: 4,
//     name: "Fluid extractor MK1",
//     tier: 1,
//   },
//   //TIER 2
//   {
//     key: 5,
//     name: "Drill MK2",
//     tier: 2,
//   },
//   {
//     key: 6,
//     name: "Assembler MK2",
//     tier: 2,
//   },
//   {
//     key: 7,
//     name: "Foundry MK1",
//     tier: 2,
//   },
//   {
//     key: 8,
//     name: "Fluid extractor MK2",
//     tier: 2,
//   },
//   {
//     key: 9,
//     name: "Oil Generator MK1",
//     tier: 2,
//   },
//   //TIER 3
//   {
//     key: 10,
//     name: "Drill MK3",
//     tier: 3,
//   },
//   {
//     key: 11,
//     name: "Assembler MK3",
//     tier: 3,
//   },
//   {
//     key: 12,
//     name: "Foundry MK2",
//     tier: 3,
//   },
//   {
//     key: 13,
//     name: "Wind generator MK2",
//     tier: 3,
//   },
//   //TIER 4
//   {
//     key: 14,
//     name: "Drill MK4",
//     tier: 4,
//   },
//   {
//     key: 15,
//     name: "Assembler MK4",
//     tier: 4,
//   },
//   {
//     key: 16,
//     name: "Foundry MK3",
//     tier: 4,
//   },
//   {
//     key: 17,
//     name: "Solar generator MK1",
//     tier: 4,
//   },
//   //TIER 5
//   {
//     key: 18,
//     name: "Drill MK5",
//     tier: 5,
//   },
//   {
//     key: 19,
//     name: "Assembler MK5",
//     tier: 5,
//   },
//   {
//     key: 20,
//     name: "Foundry MK4",
//     tier: 5,
//   },
//   {
//     key: 21,
//     name: "Fluid extractor MK3",
//     tier: 5,
//   },
//   {
//     key: 22,
//     name: "Gas extractor MK1",
//     tier: 5,
//   },
//   {
//     key: 23,
//     name: "Nuclear generator MK1",
//     tier: 5,
//   },
// ];

// const recipes = [
//   {
//     key: 1,
//     name: "Copper 1",
//     time: 10000,
//     input: [
//       {
//         resource: 0,
//         amount: 5,
//       },
//     ],
//     output: [
//       {
//         resource: 1,
//         amount: 10,
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: "Iron 1",
//     time: 10000,
//     input: [
//       {
//         resource: 0,
//         amount: 5,
//       },
//     ],
//     output: [
//       {
//         resource: 2,
//         amount: 10,
//       },
//     ],
//   },
//   {
//     key: 3,
//     name: "Coal 1",
//     time: 10000,
//     input: [
//       {
//         resource: 0,
//         amount: 5,
//       },
//     ],
//     output: [
//       {
//         resource: 3,
//         amount: 10,
//       },
//     ],
//   },
//   {
//     key: 4,
//     name: "Water 1",
//     time: 10000,
//     input: [
//       {
//         resource: 0,
//         amount: 5,
//       },
//     ],
//     output: [
//       {
//         resource: 4,
//         amount: 10,
//       },
//     ],
//   },
//   {
//     key: 5,
//     name: "Energy 1",
//     time: 10000,
//     input: [],
//     output: [
//       {
//         resource: 0,
//         amount: 10,
//       },
//     ],
//   },
// ];

// const recipesMachine = [
//   {
//     recipe: 0,
//     machine: 0,
//   },
//   {
//     recipe: 1,
//     machine: 0,
//   },
//   {
//     recipe: 2,
//     machine: 0,
//   },
//   {
//     recipe: 3,
//     machine: 0,
//   },
//   {
//     recipe: 4,
//     machine: 4,
//   },
// ];

// const lands = [
//   {
//     key: 0,
//     name: "Land 1",
//     resources: [
//       {
//         resource: 1,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
//   {
//     key: 1,
//     name: "Land V2",
//     resources: [
//       {
//         resource: 2,
//         amountMin: 500,
//         amountMax: 750,
//       },
//       {
//         resource: 3,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: "Land V3",
//     resources: [
//       {
//         resource: 4,
//         amountMin: 500,
//         amountMax: 750,
//       },
//       {
//         resource: 5,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 6,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
//   {
//     key: 3,
//     name: "Land V4",
//     resources: [
//       {
//         resource: 7,
//         amountMin: 500,
//         amountMax: 750,
//       },
//       {
//         resource: 8,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 9,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 10,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
//   {
//     key: 4,
//     name: "Land V5",
//     resources: [
//       {
//         resource: 11,
//         amountMin: 500,
//         amountMax: 750,
//       },
//       {
//         resource: 12,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 13,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 14,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
//   {
//     key: 5,
//     name: "Land V6",
//     resources: [
//       {
//         resource: 15,
//         amountMin: 500,
//         amountMax: 750,
//       },
//       {
//         resource: 16,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 17,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//       {
//         resource: 18,
//         amountMin: 1000,
//         amountMax: 2000,
//       },
//     ],
//   },
// ];

// export default run;

// async function run(req, res, next) {
//   try {
//     //Insert resources
//     await ResourceClear();
//     for (let i = 0; i < resources.length; i++) {
//       try {
//         await ResourceInsert(resources[i]);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     //Insert machines
//     await MachineMasterClear();
//     for (let i = 0; i < machines.length; i++) {
//       try {
//         await MachineMasterInsert(machines[i]);
//       } catch (error) {
//         console.log("MachineMasterInsert =>", error);
//       }
//     }

//     //Insert recipes
//     await RecipeMasterClear();
//     for (let i = 0; i < recipes.length; i++) {
//       try {
//         await RecipeMasterInsert(recipes[i]);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     //Insert recipesMachines
//     await RecipeMachineMasterClear();
//     for (let i = 0; i < recipesMachine.length; i++) {
//       try {
//         await RecipeMachineMasterInsert(recipesMachine[i]);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     //Inser lands
//     await LandMasterClear();
//     for (let i = 0; i < lands.length; i++) {
//       try {
//         await LandMasterInsert(lands[i]);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     res.json({ ok: true });
//   } catch (error) {
//     console.log(error);
//     res.json({ error });
//   }
// }
