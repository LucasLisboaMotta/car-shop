import GenericController from './generic.controller'; 
import IMotorcycleController from './interface/motorcycle.controller';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController 
  extends GenericController<IMotorcycle>
  implements IMotorcycleController {}
