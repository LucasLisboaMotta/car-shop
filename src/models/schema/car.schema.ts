import { Schema, model } from 'mongoose';
import { ICar } from '../../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
  status: { type: Boolean, required: false },
});

const carMongooseModel = model<ICar>('car', carSchema);

export default carMongooseModel;
