type FooType = (a: string) => number;

const foo: FooType = (a) => {
    return 0
}


type Member = {
    name: string,
    plusOne: (a: number) => number,
    changeName: () => void
}