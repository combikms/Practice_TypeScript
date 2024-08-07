interface StringOnly {
    [key: string]: string
}

const user: StringOnly = {
    name: 'kim',
    age: '20',
    loacation: 'Seoul',
}


interface MyType {
    'font-size': MyType | number
}

const css: MyType = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
}


interface Car {
    [key: string]: number | string;
}

const obj: Car = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
}


interface StrangeType {
    'font-size': number,
    [key: string]: StrangeType | number
}

const obj2: StrangeType = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
}