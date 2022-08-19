import GenericService from './generic.service';
import ICarService from './interfaces/car.service';
import { ICar } from '../interfaces/ICar';

export default class CarService 
  extends GenericService<ICar>
  implements ICarService {}
