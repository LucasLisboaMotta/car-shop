export type TCustomError = {
  status: number,
  message: string,
};

export default class CustomError extends Error {
  status!: number;
  constructor(error: TCustomError) {
    super(error.message);
    this.status = error.status;
  }
}

export const invalid = { status: 400, message: 'Invalid Object' };

export const minCharacters = { 
  status: 400,
  message: 'Id must have 24 hexadecimal characters',
};

export const notFound = { status: 404, message: 'Object not found' };
