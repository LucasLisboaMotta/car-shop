import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleMock: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125
};

const motorcycleMockWithId: IMotorcycle & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125
};

const motorcycleMockForChange: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
  status: false
};

const motorcycleMockForChangeWithId: IMotorcycle & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
  status: false
};

const allMotorcycleMock: IMotorcycle[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eef52cd',
    model: 'Honda CG Titan 250',
    year: 1983,
    color: 'green',
    buyValue: 2000,
    category: 'Street',
    engineCapacity: 250,
    status: false
  },
  {
    _id: '62cf1fc6412365d94eba52cd',
    model: 'Honda CG Titan 125',
    year: 1963,
    color: 'white',
    buyValue: 3500,
    category: 'Street',
    engineCapacity: 125,
    status: true
  }
];

export {
  motorcycleMock,
  motorcycleMockWithId,
  motorcycleMockForChange,
  motorcycleMockForChangeWithId,
  allMotorcycleMock
};