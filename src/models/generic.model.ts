import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class GenericModel<T> implements IModel<T> {
  protected _modelMongoose: Model<T>;

  constructor(modelMongoose: Model<T>) {
    this._modelMongoose = modelMongoose;
  }

  async create(obj: T): Promise<T> {
    return this._modelMongoose.create(obj);
  }

  async update(id: string, obj: T): Promise<T | null> {
    return this._modelMongoose
      .findByIdAndUpdate(id, obj, { returnOriginal: false });
  }

  async read(): Promise<T[]> {
    return this._modelMongoose.find();
  }

  async readOne(id: string): Promise<T | null> {
    return this._modelMongoose.findById(id);
  }
    
  async delete(id: string): Promise<T | null> {
    return this._modelMongoose.findByIdAndDelete(id);
  }
}