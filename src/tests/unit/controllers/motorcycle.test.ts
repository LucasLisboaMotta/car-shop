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
import MotorcycleController from '../../../controllers/motorcycle.controller';

describe('Testando classe motorcycleController função create', () => {
 
  it('Testando classe motorcycleController create com sucesso',async () => {
    const request = { body: motorcycleMock };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    const result = await motorcycleController.create(request as never, response as never);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });

  it('Testando classe motorcycleController argumento usado na função create',async () => {
    const request = { body: motorcycleMock };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    await motorcycleController.create(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.create.getCall(0);    
    expect(spyCallStatus.args).to.deep.eq([201]);
    expect(spyCallJson.args).to.deep.eq([motorcycleMockWithId]);
    expect(spyCallService.args).to.deep.eq([motorcycleMock]);
  });
});

describe('Testando classe motorcycleController função update', async () => {
  
  it('Testando classe motorcycleController update com sucesso', async () => {
    const request = { body: motorcycleMock, params: { id: motorcycleMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { update: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    const result = await motorcycleController.update(request as never, response as never);
    expect(result).to.be.eq(motorcycleMockWithId);
  });
  
  it('Testando classe motorcycleController argumento usado na função update',async () => {
    const request = { body: motorcycleMock, params: { id: motorcycleMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { update: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    await motorcycleController.update(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.update.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([motorcycleMockWithId]);
    expect(spyCallService.args).to.deep.eq([motorcycleMockWithId._id, motorcycleMock]);
  });
});

describe('Testando classe motorcycleController função readOne', async () => {
  
  it('Testando classe motorcycleController readOne com sucesso', async () => {
    const request = { body: motorcycleMockForChange, params: { id: motorcycleMockForChangeWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { readOne: sinon.stub().returns(motorcycleMockForChangeWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    const result = await motorcycleController.readOne(request as never, response as never);
    expect(result).to.be.eq(motorcycleMockForChangeWithId);
  });
  
  it('Testando classe motorcycleController argumento usado na função readOne',async () => {
    const request = { body: motorcycleMock, params: { id: motorcycleMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { readOne: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleController = new MotorcycleController(stub as never);
    await motorcycleController.readOne(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.readOne.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([motorcycleMockWithId]);
    expect(spyCallService.args).to.deep.eq([motorcycleMockWithId._id]);
  });
});

describe('Testando classe motorcycleController função read', async () => {
  
  it('Testando classe motorcycleController read com sucesso', async () => {
    const request = {};
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { read: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleController = new MotorcycleController(stub as never);
    const result = await motorcycleController.read(request as never, response as never);
    expect(result).to.be.eq(allMotorcycleMock);
  });
  
  it('Testando classe motorcycleController argumento usado na função read',async () => {
    const request = { body: motorcycleMock, params: { id: motorcycleMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { read: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleController = new MotorcycleController(stub as never);
    await motorcycleController.read(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.read.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([allMotorcycleMock]);
    expect(spyCallService.args).to.deep.eq([]);
  });
});


describe('Testando classe motorcycleController função delete', async () => {
  
  it('Testando classe motorcycleController delete com sucesso', async () => {
    const request = { params: { id: motorcycleMockForChangeWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { delete: sinon.stub().returns(undefined) };
    const motorcycleController = new MotorcycleController(stub as never);
    const result = await motorcycleController.delete(request as never, response as never);
    expect(result).to.be.eq(undefined);
  });
  
  it('Testando classe motorcycleController argumento usado na função delete',async () => {
    const request = { params: { id: motorcycleMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { delete: sinon.stub().returns(undefined) };
    const motorcycleController = new MotorcycleController(stub as never);
    await motorcycleController.delete(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.delete.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([204]);
    expect(spyCallJson.args).to.deep.eq([undefined]);
    expect(spyCallService.args).to.deep.eq([motorcycleMockWithId._id]);
  });
});