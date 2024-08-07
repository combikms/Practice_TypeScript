type Age<T> = T extends any[] ? (T[0] extends string ? string : unknown) : unknown;
declare let age1: Age<[string, number]>;
declare let age2: Age<[boolean, number]>;
type TypeExtract<T> = T extends (x: infer R) => void ? R : unknown;
declare let a: TypeExtract<(x: number) => void>;
declare let b: TypeExtract<(x: string) => void>;
