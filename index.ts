type cutZero = (s: string) => string;
type removeDash = (s: string) => number;

const foo: cutZero = (s) => {
    if (s[0] == '0') {
        return s.slice(1)
    } else {
        return s
    }
}

const boo: removeDash = (s) => {
    let newStr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '-') {            
            newStr += s[i]
        }
    }
    return parseInt(newStr)
}

console.log(boo('10-9999-88-777'));

const baz = (a: string, b: cutZero, c: removeDash) => {
    console.log(c(b(a)))
}

baz('1234-567-89', foo, boo)