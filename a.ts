type Car = {
    wheel: number,
    model: string
};

interface Bike {
    wheel: 2,
    model: string
};

type Foo = (obj: { a: number, b: string }) => void

export { Car, Bike, Foo }