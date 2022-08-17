export type TZod<T> = {
  safeParse(obj: T): boolean;
};