import GenericModel from './generic.model';
import ICarModel from './interfaces/car.model';
import { ICar } from '../interfaces/ICar';

export default class CarModel extends GenericModel<ICar> implements ICarModel {}
