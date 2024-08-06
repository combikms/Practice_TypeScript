// const bark: [string, boolean] = ['dog', true];
// const myeow: [string, boolean?] = ['cat']
// const moo: [string, boolean?, number] = ['cow'] // Error


// const foo = (...rest: [number, string, boolean]) => console.log(rest);
// foo(1, 'A', false);


// const arr = [1, 2, 3];
// const arr2: [number, number, ...number[]] = [4, 5, ...arr];


// const arr: [string, number, boolean] = ['chicken', 9400, true]


// const arr: [string, number, ...boolean[]] = ['chicken', 9400, true, false, true, true, false, true]


// const foo = (a: string, b: boolean, ...c: (string | number)[]) => { };
// const boo = (...rest: [string, boolean, ...(string | number)[]]) => { };
// foo('a', true, 6, 3, '1', 4);
// boo('a', true, 6, 3, '1', 4);

const bar = (...rest: (string | number)[]): [string[], number[]] => {
    const num: number[] = []
    const str: string[] = []
    rest.forEach((a) => {
        if (typeof a === 'number') {
            num.push(a);
        } else {
            str.push(a);
        }
    })
    return [str, num];
}

console.log(bar('b', 5, 6, 8, 'a'));