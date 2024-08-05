const Foo = <T>(x: T[]): T => x[0];

let a = Foo<number>([4, 2]);
let b = Foo<string>(['Fire', 'Wind']);

console.log(a + 1);
console.log(b.length);



const Boo = <T extends number>(x: T) => x - 1;
let c = Boo<number>(100);
console.log(c)