import GenericModel from '../models/generic.model';
import { IService } from './interfaces/generic.service';
import CustomError, { 
  invalid, 
  minCharacters,
  notFound,
} from '../helpers/CustomError';
import { IZod } from '../interfaces/IZod';

export default abstract class GenericService<T> implements IService<T> {
  private _model: GenericModel<T>;
  private _zod: IZod<T>;

  constructor(model: GenericModel<T>, zod: IZod<T>) {
    this._model = model;
    this._zod = zod;
  }
    
  create(obj: T): Promise<T> {
    const verifyObj = this._zod.safeParse(obj);
    if (!verifyObj.success) throw new CustomError(invalid);
    return this._model.create(obj);
  }

  read(): Promise<T[]> {
    return this._model.read();
  }

  async readOne(id: string): Promise<T> {
    if (id.length < 24) throw new CustomError(minCharacters);
    const obj = await this._model.readOne(id);
    if (!obj) throw new CustomError(notFound);
    return obj;
  }

  async update(id: string, obj: T): Promise<T> {
    if (id.length < 24) throw new CustomError(minCharacters);
    const verifyObj = this._zod.safeParse(obj);
    if (!verifyObj.success) throw new CustomError(invalid);
    const objUpdated = await this._model.update(id, obj);
    if (!objUpdated) throw new CustomError(notFound);
    return objUpdated;
  }

  async delete(id: string): Promise<void> {
    if (id.length < 24) throw new CustomError(minCharacters);
    const obj = await this._model.delete(id);
    if (!obj) throw new CustomError(notFound);
  }
}