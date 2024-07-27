type Mytype = string | number | undefined;
let a: Mytype = 'a';
let b: Mytype = 1;

type Gf = {
    readonly name: string,
    age: number,
    region?: string
};

const gf: Gf = {
    name: "Sena",
    age: 22
}

gf.name = 'Samantha' // Error

type Name = string;
type Age = number;
type Person = Name | Age;

type PosX = { x: number };
type PosY = { y: number };
type Pos = PosX & PosY;

const p: Pos = { x: 3, y: 4 };

type Atype = number;
type Atype = string; // Error