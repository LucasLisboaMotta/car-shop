import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import {
  motorcycleMock,
  motorcycleMockWithId,
  motorcycleMockForChange,
  motorcycleMockForChangeWithId,
  allMotorcycleMock
} from '../../mocks/motorcycle.mock';
import MotorcycleModel from '../../../models/motorcycle.model';

describe('Testando classe MotorcycleModel função create', () => {
 
  it('Testando classe MotorcycleModel create com sucesso',async () => {
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    const result = await motorcycleModel.create(motorcycleMock);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });

  it('Testando classe MotorcycleModel argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    await motorcycleModel.create(motorcycleMock);
    const spyCall = stub.create.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMock]);
  });
});

describe('Testando classe MotorcycleModel função update', async () => {
  
  it('Testando classe MotorcycleModel update com sucesso', async () => {
    const stub = { findByIdAndUpdate: sinon.stub().returns(motorcycleMockForChangeWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    const result = await motorcycleModel.update(motorcycleMockForChangeWithId._id, motorcycleMockForChange);
    expect(result).to.deep.eq(motorcycleMockForChangeWithId);
  });
  
  it('Testando classe MotorcycleModel argumento usado na função update',async () => {
    const stub = { findByIdAndUpdate: sinon.stub().returns(motorcycleMockForChangeWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    await motorcycleModel.update(motorcycleMockForChangeWithId._id, motorcycleMockForChange);
    const spyCall = stub.findByIdAndUpdate.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockForChangeWithId._id, motorcycleMockForChange, { returnOriginal: false }]);
  });
});

describe('Testando classe MotorcycleModel função readOne', async () => {
  
  it('Testando classe MotorcycleModel readOne com sucesso', async () => {
    const stub = { findById: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    const result = await motorcycleModel.readOne(motorcycleMockWithId._id);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });
  
  it('Testando classe MotorcycleModel argumento usado na função readOne',async () => {
    const stub = { findById: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    await motorcycleModel.readOne(motorcycleMockWithId._id);
    const spyCall = stub.findById.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockWithId._id]);
  });
});

describe('Testando classe MotorcycleModel função read', async () => {
  
  it('Testando classe MotorcycleModel read com sucesso', async () => {
    const stub = { find: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    const result = await motorcycleModel.read();
    expect(result).to.deep.eq(allMotorcycleMock);
  });
  
  it('Testando classe MotorcycleModel argumento usado na função read',async () => {
    const stub = { find: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    await motorcycleModel.read();
    const spyCall = stub.find.getCall(0);
    expect(spyCall.args).to.deep.eq([]);
  });
});


describe('Testando classe MotorcycleModel função delete', async () => {
  
  it('Testando classe MotorcycleModel delete com sucesso', async () => {
    const stub = { findByIdAndDelete: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    const result = await motorcycleModel.delete(motorcycleMockWithId._id);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });
  
  it('Testando classe MotorcycleModel argumento usado na função delete',async () => {
    const stub = { findByIdAndDelete: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleModel = new MotorcycleModel(stub as never);
    await motorcycleModel.delete(motorcycleMockWithId._id);
    const spyCall = stub.findByIdAndDelete.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockWithId._id]);
  });
});