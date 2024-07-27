const foo = (s) => {
    if (s[0] == '0') {
        return s.slice(1);
    }
    else {
        return s;
    }
};
const boo = (s) => {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '-') {
            newStr += s[i];
        }
    }
    return parseInt(newStr);
};
console.log(boo('10-9999-88-777'));
const baz = (a, b, c) => {
    console.log(c(b(a)));
};
baz('1234-567-89', foo, boo);
