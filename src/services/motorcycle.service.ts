import GenericService from './generic.service';
import IMotorcycleService from './interfaces/motorcycle.service';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleService
  extends GenericService<IMotorcycle>
  implements IMotorcycleService {}
