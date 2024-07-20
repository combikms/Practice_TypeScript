function foo(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (typeof temp === 'string') {
            arr[i] = parseInt(temp);
        }
    }
}
const arr = ['1', 2, '3'];
console.log(arr);
foo(arr);
console.log(arr);
