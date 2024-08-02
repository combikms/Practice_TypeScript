type Fish = { swim: string };
type Bird = { fly: string };

function foo(animal: Fish | Bird) {
    if ('swim' in animal) {
        console.log("This is fish.");
    } else {
        console.log("This is bird.");
    }
}

const a1: Fish = { swim: 'aaa' };
const a2: Bird = { fly: 'aaa' };

foo(a1);
foo(a2);


type Car = {
    wheels: '4'
    color: string
};

type Bike = {
    wheels: '2'
    color: string
};

function boo(x: Car | Bike) {
    if (x.wheels === '4') {
        console.log('This is car.');
    } else {
        console.log('This is bike.');
    }
}

const c: Car = {
    wheels: '4',
    color: 'white'
};
const b: Bike = {
    wheels: '2',
    color: 'white'
};
boo(c);
boo(b);