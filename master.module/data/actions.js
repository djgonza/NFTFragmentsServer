const insertAll = async (masters, model) => {
  await clear(model);
  for (let i = 0; i < masters.length; i++) {
    await insert(masters[i], model);
  }
};

const insert = async (master, model) => {
  const exists = await model.findOne({ key: master.key });
  if (exists) return;
  const newMaster = new model(master);
  newMaster.save();
};

const clear = async model => {
  return await model.deleteMany({});
};

export { insertAll, insert, clear };
