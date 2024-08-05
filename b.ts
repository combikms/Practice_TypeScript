import { Car, Bike, Foo } from './a'

// const c: Car = {
//     wheel: 4,
//     model: "E220d"
// };

// const b: Bike = {
//     wheel: 2,
//     model: "BMX"
// };

// console.log(c);
// console.log(b);

const obj = { a: 1, b: 'E' };
const foo: Foo = (obj) => { console.log(obj) }
foo(obj);


// namespace n1 {
//     export type Dog = string;
// }

// namespace n2 {
//     export interface Dog { name: string };
// }


// const dog1: n1.Dog = 'bark';
// const dog2: n2.Dog = { name: 'paw' }