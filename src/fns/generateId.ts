import { Model } from "mongoose";

async function generateId<T>(model: Model<T>): Promise<number> {
  const id = Math.floor(new Date().valueOf() * Math.random());
  const exist = await model.findOne({ id });

  if (exist) {
    return generateId(model);
  }
  return id;
}

export default generateId;
