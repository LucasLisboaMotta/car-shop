import express from 'express';
import CarController from '../controllers/car.controller';
import CarService from '../services/car.service';
import CarModel from '../models/car.model';
import { CarZodSchema } from '../interfaces/ICar';
import carMongooseModel from '../models/schema/car.schema';

const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel, CarZodSchema);
const carController = new CarController(carService);

const cars = express();

cars.get('/', (req, res) => carController.read(req, res));
cars.get('/:id', (req, res) => carController.readOne(req, res));

cars.post('/', (req, res) => carController.create(req, res));

cars.put('/:id', (req, res) => carController.update(req, res));

cars.delete('/:id', (req, res) => carController.delete(req, res));

export default cars;
