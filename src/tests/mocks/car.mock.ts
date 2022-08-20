import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Fiat Uno',
  year: 2002,
  color: 'White',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Fiat Uno',
  year: 2002,
  color: 'White',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockForChange: ICar = {
  model: 'Fiat Uno 1.4',
  year: 2005,
  color: 'Black',
  buyValue: 20000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const carMockForChangeWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Fiat Uno 1.4',
  year: 2005,
  color: 'Black',
  buyValue: 20000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const allCarMock: ICar[] & { _id: string }[] = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: "62cf1fc6498565d94eba52cd",
    model: 'Fiat Uno 1.4',
    year: 2005,
    color: 'Black',
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 4
  }
];

export {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId,
  allCarMock
};