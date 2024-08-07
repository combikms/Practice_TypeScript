interface StringOnly {
    [key: string]: string;
}
declare const user: StringOnly;
interface MyType {
    'font-size': MyType | number;
}
declare const css: MyType;
interface Car {
    [key: string]: number | string;
}
declare const obj: Car;
interface StrangeType {
    'font-size': number;
    [key: string]: StrangeType | number;
}
declare const obj2: StrangeType;
