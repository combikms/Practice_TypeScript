function foo(animal) {
    if ('swim' in animal) {
        console.log("This is fish.");
    }
    else {
        console.log("This is bird.");
    }
}
const a1 = { swim: 'aaa' };
const a2 = { fly: 'aaa' };
foo(a1);
foo(a2);
function boo(x) {
    if (x.wheels === '4') {
        console.log('This is car.');
    }
    else {
        console.log('This is bike.');
    }
}
const c = {
    wheels: '4',
    color: 'white'
};
const b = {
    wheels: '2',
    color: 'white'
};
boo(c);
boo(b);
