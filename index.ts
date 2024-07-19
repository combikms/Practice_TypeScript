let username: string = 'kim'
const arr: string[] = ['Park', 'Hong']
const obj: { name: string, age?: number } = { name: 'kwon' }

type Mytype = string | number
let gender: Mytype = 'male'
gender = 2

function foo(x: number): number {
    return x * 2
}

type Member = [number, boolean]
const john: Member = [1, true]

type Member2 = { [key: string]: string }
const mary: Member2 = { name: "koo" }

class User {
    name: string
    constructor(name: string) {
        this.name = name
    }
}