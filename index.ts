// const foo = <T extends string | string[]>(data: T): number => {
//     return data.length;
// }

// let a = foo<string>("hello");
// let b = foo<string[]>(['kim', 'park']);

// console.log(a);
// console.log(b);

// interface Animal {
//     name: string;
//     age: number
// }

// const boo = <T>(a: string): T => {
//     return JSON.parse(a);
// }

// let data = '{"name" : "dog", "age" : 1 }';
// const result = boo<Animal>(data);
// console.log(result);

class Person<T> {
    name: T;
    constructor(a: T) {
        this.name = a;
    }
}
let a = new Person<string>('어쩌구');