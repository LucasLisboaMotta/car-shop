export type IZod<T> = {
  safeParse(obj: T): { success: boolean };
};