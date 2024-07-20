function foo(arr: (number | string)[]): void {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        if (typeof temp === 'string') {
            arr[i] = parseInt(temp)
        }
    }
}

const arr: (number | string)[] = ['1', 2, '3']
console.log(arr)
foo(arr)
console.log(arr)