import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId,
  allCarMock
} from '../../mocks/car.mock';
import CarModel from '../../../models/car.model';

describe('Testando classe CarModel função create', () => {
 
  it('Testando classe CarModel create com sucesso',async () => {
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    const result = await carModel.create(carMock);
    expect(result).to.deep.eq(carMockWithId);
  });

  it('Testando classe CarModel argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    await carModel.create(carMock);
    const spyCall = stub.create.getCall(0);
    expect(spyCall.args).to.deep.eq([carMock]);
  });
});

describe('Testando classe CarModel função update', async () => {
  
  it('Testando classe CarModel update com sucesso', async () => {
    const stub = { findByIdAndUpdate: sinon.stub().returns(carMockForChangeWithId) };
    const carModel = new CarModel(stub as never);
    const result = await carModel.update(carMockForChangeWithId._id, carMockForChange);
    expect(result).to.deep.eq(carMockForChangeWithId);
  });
  
  it('Testando classe CarModel argumento usado na função update',async () => {
    const stub = { findByIdAndUpdate: sinon.stub().returns(carMockForChangeWithId) };
    const carModel = new CarModel(stub as never);
    await carModel.update(carMockForChangeWithId._id, carMockForChange);
    const spyCall = stub.findByIdAndUpdate.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockForChangeWithId._id, carMockForChange, { returnOriginal: false }]);
  });
});

describe('Testando classe CarModel função readOne', async () => {
  
  it('Testando classe CarModel readOne com sucesso', async () => {
    const stub = { findById: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    const result = await carModel.readOne(carMockWithId._id);
    expect(result).to.deep.eq(carMockWithId);
  });
  
  it('Testando classe CarModel argumento usado na função readOne',async () => {
    const stub = { findById: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    await carModel.readOne(carMockWithId._id);
    const spyCall = stub.findById.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockWithId._id]);
  });
});

describe('Testando classe CarModel função read', async () => {
  
  it('Testando classe CarModel read com sucesso', async () => {
    const stub = { find: sinon.stub().returns(allCarMock) };
    const carModel = new CarModel(stub as never);
    const result = await carModel.read();
    expect(result).to.deep.eq(allCarMock);
  });
  
  it('Testando classe CarModel argumento usado na função read',async () => {
    const stub = { find: sinon.stub().returns(allCarMock) };
    const carModel = new CarModel(stub as never);
    await carModel.read();
    const spyCall = stub.find.getCall(0);
    expect(spyCall.args).to.deep.eq([]);
  });
});


describe('Testando classe CarModel função delete', async () => {
  
  it('Testando classe CarModel delete com sucesso', async () => {
    const stub = { findByIdAndDelete: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    const result = await carModel.delete(carMockWithId._id);
    expect(result).to.deep.eq(carMockWithId);
  });
  
  it('Testando classe CarModel argumento usado na função delete',async () => {
    const stub = { findByIdAndDelete: sinon.stub().returns(carMockWithId) };
    const carModel = new CarModel(stub as never);
    await carModel.delete(carMockWithId._id);
    const spyCall = stub.findByIdAndDelete.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockWithId._id]);
  });
});