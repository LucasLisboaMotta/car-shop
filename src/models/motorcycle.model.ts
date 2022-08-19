import GenericModel from './generic.model';
import IMotorcycleModel from './interfaces/motorcycle.model';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleModel 
  extends GenericModel<IMotorcycle> 
  implements IMotorcycleModel {}
