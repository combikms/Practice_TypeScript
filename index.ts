interface Foo {
    plus(a: number, b: number): number
    minus(a: number, b: number): number
};

const obj: Foo = {
    plus(a, b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}

console.log(obj.plus(2, 3))
console.log(obj.minus(6, 2))