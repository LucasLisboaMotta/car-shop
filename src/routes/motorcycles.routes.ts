import express from 'express';
import MotorcycleController from '../controllers/motorcycle.controller';
import MotorcycleService from '../services/motorcycle.service';
import MotorcycleModel from '../models/motorcycle.model';
import { MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import motorcycleMongooseModel from '../models/schema/motorcycle.schema';

const motorcycleModel = new MotorcycleModel(motorcycleMongooseModel);
const motorcycleService = new MotorcycleService(
  motorcycleModel, 
  MotorcycleZodSchema,
);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycles = express();

motorcycles.get('/', (req, res) => motorcycleController.read(req, res));
motorcycles.get('/:id', (req, res) => motorcycleController.readOne(req, res));

motorcycles.post('/', (req, res) => motorcycleController.create(req, res));

motorcycles.put('/:id', (req, res) => motorcycleController.update(req, res));

motorcycles.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default motorcycles;
