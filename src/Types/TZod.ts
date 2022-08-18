export type TZod<T> = {
  safeParse(obj: T): { success: boolean };
};