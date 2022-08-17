import { z } from 'zod';

const CarZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().int().min(1900).max(2022),
  color: z.string().min(3),
  buyValue: z.number().int(),
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type TCar = z.infer<typeof CarZodSchema>;

export default TCar;
export { CarZodSchema };