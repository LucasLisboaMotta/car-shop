import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const categories = ['Street', 'Custom', 'Trail'] as const;

const MotorcycleZodSchema = z.object({
  category: z.enum(categories),
  engineCapacity: z.number().int().min(1).max(2500),
}).merge(VehicleZodSchema);

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { MotorcycleZodSchema, IMotorcycle };