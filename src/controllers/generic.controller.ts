import { Request, Response } from 'express';
import { IService } from '../services/interfaces/generic.service';
import { IController } from './interface/generic.controller';

export default abstract class GenericController<T> implements IController {
  private _service: IService<T>;

  constructor(service: IService<T>) {
    this._service = service;
  }
  async create(req: Request, res: Response): Promise<Response> {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }
  async read(_req: Request, res: Response): Promise<Response> {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
  async readOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.delete(id);
    return res.status(204).json(result);
  }
}