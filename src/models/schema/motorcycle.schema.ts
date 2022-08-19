import { Schema, model } from 'mongoose';
import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleSchema = new Schema<IMotorcycle>(
  {
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    buyValue: { type: Number, required: true },
    status: { type: Boolean, required: false },
    category: { type: String, required: true },
    engineCapacity: { type: Number, required: true },
  },
  { versionKey: false },
);

const motorcycleMongooseModel = model<IMotorcycle>(
  'motorcycle',
  motorcycleSchema,
);

export default motorcycleMongooseModel;