import GenericService from './generic.service';
import ICarService from './interfaces/car.service';
import { ICar } from '../interfaces/ICar';

class CarService extends GenericService<ICar> implements ICarService {}

export default CarService;
