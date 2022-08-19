import { IMotorcycle } from '../../interfaces/IMotorcycle';
import { IService } from './generic.service';

type IMotorcycleService = IService<IMotorcycle>;

export default IMotorcycleService;
