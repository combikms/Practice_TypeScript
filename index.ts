// const obj = { name: 'kim', age: 20 };
// console.log(Object.keys(obj));

// interface Person {
//     age: number,
//     name: string
// };

// type PersonKeys = keyof Person;
// let a: PersonKeys = 'age';


// interface Person {
//     [key: string]: number
// };

// type PersonKeys = keyof Person;
// let a: PersonKeys = 'age';


// type Car = {
//     color: boolean,
//     model: boolean,
//     price: boolean | number
// }

// type TypeChanger<T> = {
//     [key in keyof T]: string
// }

// type NewType = TypeChanger<Car>

// type Bus = {
//     color: string,
//     model: boolean,
//     price: number
// }

// type TypeChanger<T, U> {
//     [key in keyof T]: U;
// }

// type NewBus = TypeChanger<Bus, string | number>;
// type Age<T> = T extends string ? string : unknown;
// let a: Age<string>;  // string
// let b: Age<number>;  // unknown

// type FirstItem<T> = T extends any[] ? T[0] : any;
// const arr: FirstItem<string[]> = 'abc';
// let c: FirstItem<number> = false;

// type TypeExtract<T> = T extends (() => infer R) ? R : unknown;
// type A = TypeExtract<() => number>
// type B = ReturnType<() => string>

type Age<T> = T extends any[] ? (T[0] extends string ? string : unknown) : unknown;
let age1: Age<[string, number]>;
let age2: Age<[boolean, number]>;

type TypeExtract<T> = T extends (x: infer R) => void ? R : unknown;
let a: TypeExtract<(x: number) => void>
let b: TypeExtract<(x: string) => void>