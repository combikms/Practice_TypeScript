const Foo = (x) => x[0];
let a = Foo([4, 2]);
let b = Foo(['Fire', 'Wind']);
console.log(a + 1);
console.log(b.length);
const Boo = (x) => x - 1;
let c = Boo(100);
console.log(c);
