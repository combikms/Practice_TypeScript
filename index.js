function foo(obj) {
    if (typeof obj.subject === 'string') {
        return obj.subject;
    }
    else {
        return obj.subject[obj.subject.length - 1];
    }
}
const 철수쌤 = { subject: 'math' };
const 영희쌤 = { subject: ['science', 'english'] };
const 민수쌤 = { subject: ['science', 'art', 'korean'] };
const strange = { hello: 'hi' };
console.log(foo(철수쌤));
console.log(foo(영희쌤));
console.log(foo(민수쌤));
// console.log(foo(strange))
