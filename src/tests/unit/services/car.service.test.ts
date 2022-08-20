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
import CarService from '../../../services/car.service';

const zod = (arg: boolean) => ({ safeParse: () => ({ success: arg }) });

describe('Testando classe CarService função create', () => {
 
  it('Testando classe CarService create com sucesso',async () => {
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    const result = await carService.create(carMock);
    expect(result).to.deep.eq(carMockWithId);
  });

  it('Testando classe CarService argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    await carService.create(carMock);
    const spyCall = stub.create.getCall(0);
    expect(spyCall.args).to.deep.eq([carMock]);
  });

  it('Testando classe CarService argumento invalido', async () => {
    const stub = { create: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.create({} as never);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Invalid Object');
  });
});

describe('Testando classe CarService função update', async () => {
  
  it('Testando classe CarService update com sucesso', async () => {
    const stub = { update: sinon.stub().returns(carMockForChangeWithId) };
    const carService = new CarService(stub as never, zod(true));
    const result = await carService.update(carMockForChangeWithId._id, carMockForChange);
    expect(result).to.deep.eq(carMockForChangeWithId);
  });
  
  it('Testando classe CarService argumento usado na função update',async () => {
    const stub = { update: sinon.stub().returns(carMockForChangeWithId) };
    const carService = new CarService(stub as never, zod(true));
    await carService.update(carMockForChangeWithId._id, carMockForChange);
    const spyCall = stub.update.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockForChangeWithId._id, carMockForChange]);
  });

  it('Testando classe CarService objeto invalido', async () => {
    const stub = { update: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.update(carMockWithId._id, {} as never, );
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Invalid Object');
  });

  it('Testando classe CarService id invalido', async () => {
    const stub = { update: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.update('123456', carMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

   it('Testando classe CarService id invalido', async () => {
    const stub = { update: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.update('123456', carMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

  it('Testando classe CarService com retorno invalido da model', async () => {
    const stub = { update: sinon.stub().returns(null) };
    const carService = new CarService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.update(carMockWithId._id, carMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });

});

describe('Testando classe CarService função readOne', async () => {
  
  it('Testando classe CarService readOne com sucesso', async () => {
    const stub = { readOne: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    const result = await carService.readOne(carMockWithId._id);
    expect(result).to.deep.eq(carMockWithId);
  });
  
  it('Testando classe CarService argumento usado na função readOne',async () => {
    const stub = { readOne: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    await carService.readOne(carMockWithId._id);
    const spyCall = stub.readOne.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockWithId._id]);
  });

  it('Testando classe CarService com retorno invalido da model', async () => {
    const stub = { readOne: sinon.stub().returns(null) };
    const carService = new CarService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.readOne(carMockWithId._id);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });

  it('Testando classe CarService id invalido', async () => {
    const stub = { readOne: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.readOne('123456');
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });
});

describe('Testando classe CarService função read', async () => {
  
  it('Testando classe CarService read com sucesso', async () => {
    const stub = { read: sinon.stub().returns(allCarMock) };
    const carService = new CarService(stub as never, zod(true));
    const result = await carService.read();
    expect(result).to.deep.eq(allCarMock);
  });
  
  it('Testando classe CarService argumento usado na função read',async () => {
    const stub = { read: sinon.stub().returns(allCarMock) };
    const carService = new CarService(stub as never, zod(true));
    await carService.read();
    const spyCall = stub.read.getCall(0);
    expect(spyCall.args).to.deep.eq([]);
  });
});


describe('Testando classe CarService função delete', async () => {
  
  it('Testando classe CarService delete com sucesso', async () => {
    const stub = { delete: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    const result = await carService.delete(carMockWithId._id);
    expect(result).to.deep.eq(undefined);
  });
  
  it('Testando classe CarService argumento usado na função delete',async () => {
    const stub = { delete: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(true));
    await carService.delete(carMockWithId._id);
    const spyCall = stub.delete.getCall(0);
    expect(spyCall.args).to.deep.eq([carMockWithId._id]);
  });

  it('Testando classe CarService id invalido', async () => {
    const stub = { delete: sinon.stub().returns(carMockWithId) };
    const carService = new CarService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.delete('123456');
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

  it('Testando classe CarService com retorno invalido da model', async () => {
    const stub = { delete: sinon.stub().returns(null) };
    const carService = new CarService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await carService.delete(carMockWithId._id);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });
});