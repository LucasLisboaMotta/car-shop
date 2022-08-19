import GenericController from './generic.controller'; 
import ICarController from './interface/car.controller';
import { ICar } from '../interfaces/ICar';

export default class CarController
  extends GenericController<ICar>
  implements ICarController {}
