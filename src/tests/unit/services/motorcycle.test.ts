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
import MotorcycleService from '../../../services/motorcycle.service';

const zod = (arg: boolean) => ({ safeParse: () => ({ success: arg }) });

describe('Testando classe motorcycleService função create', () => {
 
  it('Testando classe motorcycleService create com sucesso',async () => {
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    const result = await motorcycleService.create(motorcycleMock);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });

  it('Testando classe motorcycleService argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    await motorcycleService.create(motorcycleMock);
    const spyCall = stub.create.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMock]);
  });

  it('Testando classe motorcycleService argumento invalido', async () => {
    const stub = { create: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.create({} as never);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Invalid Object');
  });
});

describe('Testando classe motorcycleService função update', async () => {
  
  it('Testando classe motorcycleService update com sucesso', async () => {
    const stub = { update: sinon.stub().returns(motorcycleMockForChangeWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    const result = await motorcycleService.update(motorcycleMockForChangeWithId._id, motorcycleMockForChange);
    expect(result).to.deep.eq(motorcycleMockForChangeWithId);
  });
  
  it('Testando classe motorcycleService argumento usado na função update',async () => {
    const stub = { update: sinon.stub().returns(motorcycleMockForChangeWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    await motorcycleService.update(motorcycleMockForChangeWithId._id, motorcycleMockForChange);
    const spyCall = stub.update.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockForChangeWithId._id, motorcycleMockForChange]);
  });

  it('Testando classe motorcycleService objeto invalido', async () => {
    const stub = { update: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.update(motorcycleMockWithId._id, {} as never, );
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Invalid Object');
  });

  it('Testando classe motorcycleService id invalido', async () => {
    const stub = { update: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.update('123456', motorcycleMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

   it('Testando classe motorcycleService id invalido', async () => {
    const stub = { update: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.update('123456', motorcycleMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

  it('Testando classe motorcycleService com retorno invalido da model', async () => {
    const stub = { update: sinon.stub().returns(null) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });

});

describe('Testando classe motorcycleService função readOne', async () => {
  
  it('Testando classe motorcycleService readOne com sucesso', async () => {
    const stub = { readOne: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    const result = await motorcycleService.readOne(motorcycleMockWithId._id);
    expect(result).to.deep.eq(motorcycleMockWithId);
  });
  
  it('Testando classe motorcycleService argumento usado na função readOne',async () => {
    const stub = { readOne: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    await motorcycleService.readOne(motorcycleMockWithId._id);
    const spyCall = stub.readOne.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockWithId._id]);
  });

  it('Testando classe motorcycleService com retorno invalido da model', async () => {
    const stub = { readOne: sinon.stub().returns(null) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.readOne(motorcycleMockWithId._id);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });

  it('Testando classe motorcycleService id invalido', async () => {
    const stub = { readOne: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.readOne('123456');
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });
});

describe('Testando classe motorcycleService função read', async () => {
  
  it('Testando classe motorcycleService read com sucesso', async () => {
    const stub = { read: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    const result = await motorcycleService.read();
    expect(result).to.deep.eq(allMotorcycleMock);
  });
  
  it('Testando classe motorcycleService argumento usado na função read',async () => {
    const stub = { read: sinon.stub().returns(allMotorcycleMock) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    await motorcycleService.read();
    const spyCall = stub.read.getCall(0);
    expect(spyCall.args).to.deep.eq([]);
  });
});


describe('Testando classe motorcycleService função delete', async () => {
  
  it('Testando classe motorcycleService delete com sucesso', async () => {
    const stub = { delete: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    const result = await motorcycleService.delete(motorcycleMockWithId._id);
    expect(result).to.deep.eq(undefined);
  });
  
  it('Testando classe motorcycleService argumento usado na função delete',async () => {
    const stub = { delete: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    await motorcycleService.delete(motorcycleMockWithId._id);
    const spyCall = stub.delete.getCall(0);
    expect(spyCall.args).to.deep.eq([motorcycleMockWithId._id]);
  });

  it('Testando classe motorcycleService id invalido', async () => {
    const stub = { delete: sinon.stub().returns(motorcycleMockWithId) };
    const motorcycleService = new MotorcycleService(stub as never, zod(false));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.delete('123456');
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(400);
    expect(error.message).to.deep.eq('Id must have 24 hexadecimal characters');
  });

  it('Testando classe motorcycleService com retorno invalido da model', async () => {
    const stub = { delete: sinon.stub().returns(null) };
    const motorcycleService = new MotorcycleService(stub as never, zod(true));
    let error: { status: number | undefined, message: string | undefined };
    try {
      await motorcycleService.delete(motorcycleMockWithId._id);
      error = { status: undefined, message: undefined };
    } catch (err: any) {
      error = err;
    }
    expect(error.status).to.deep.eq(404);
    expect(error.message).to.deep.eq('Object not found');
  });
});