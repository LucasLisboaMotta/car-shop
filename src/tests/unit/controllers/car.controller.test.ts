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
import CarController from '../../../controllers/car.controller';

describe('Testando classe CarController função create', () => {
 
  it('Testando classe CarController create com sucesso',async () => {
    const request = { body: carMock };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carController = new CarController(stub as never);
    const result = await carController.create(request as never, response as never);
    expect(result).to.deep.eq(carMockWithId);
  });

  it('Testando classe CarController argumento usado na função create',async () => {
    const request = { body: carMock };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carController = new CarController(stub as never);
    await carController.create(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.create.getCall(0);    
    expect(spyCallStatus.args).to.deep.eq([201]);
    expect(spyCallJson.args).to.deep.eq([carMockWithId]);
    expect(spyCallService.args).to.deep.eq([carMock]);
  });
});

describe('Testando classe CarController função update', async () => {
  
  it('Testando classe CarController update com sucesso', async () => {
    const request = { body: carMock, params: { id: carMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { update: sinon.stub().returns(carMockWithId) };
    const carController = new CarController(stub as never);
    const result = await carController.update(request as never, response as never);
    expect(result).to.be.eq(carMockWithId);
  });
  
  it('Testando classe CarController argumento usado na função update',async () => {
    const request = { body: carMock, params: { id: carMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { update: sinon.stub().returns(carMockWithId) };
    const carController = new CarController(stub as never);
    await carController.update(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.update.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([carMockWithId]);
    expect(spyCallService.args).to.deep.eq([carMockWithId._id, carMock]);
  });
});

describe('Testando classe CarController função readOne', async () => {
  
  it('Testando classe CarController readOne com sucesso', async () => {
    const request = { body: carMockForChange, params: { id: carMockForChangeWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { readOne: sinon.stub().returns(carMockForChangeWithId) };
    const carController = new CarController(stub as never);
    const result = await carController.readOne(request as never, response as never);
    expect(result).to.be.eq(carMockForChangeWithId);
  });
  
  it('Testando classe CarController argumento usado na função readOne',async () => {
    const request = { body: carMock, params: { id: carMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { readOne: sinon.stub().returns(carMockWithId) };
    const carController = new CarController(stub as never);
    await carController.readOne(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.readOne.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([carMockWithId]);
    expect(spyCallService.args).to.deep.eq([carMockWithId._id]);
  });
});

describe('Testando classe CarController função read', async () => {
  
  it('Testando classe CarController read com sucesso', async () => {
    const request = {};
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { read: sinon.stub().returns(allCarMock) };
    const carController = new CarController(stub as never);
    const result = await carController.read(request as never, response as never);
    expect(result).to.be.eq(allCarMock);
  });
  
  it('Testando classe CarController argumento usado na função read',async () => {
    const request = { body: carMock, params: { id: carMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { read: sinon.stub().returns(allCarMock) };
    const carController = new CarController(stub as never);
    await carController.read(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.read.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([200]);
    expect(spyCallJson.args).to.deep.eq([allCarMock]);
    expect(spyCallService.args).to.deep.eq([]);
  });
});


describe('Testando classe CarController função delete', async () => {
  
  it('Testando classe CarController delete com sucesso', async () => {
    const request = { params: { id: carMockForChangeWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { delete: sinon.stub().returns(undefined) };
    const carController = new CarController(stub as never);
    const result = await carController.delete(request as never, response as never);
    expect(result).to.be.eq(undefined);
  });
  
  it('Testando classe CarController argumento usado na função delete',async () => {
    const request = { params: { id: carMockWithId._id } };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { delete: sinon.stub().returns(undefined) };
    const carController = new CarController(stub as never);
    await carController.delete(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.delete.getCall(0);
    expect(spyCallStatus.args).to.deep.eq([204]);
    expect(spyCallJson.args).to.deep.eq([undefined]);
    expect(spyCallService.args).to.deep.eq([carMockWithId._id]);
  });
});
