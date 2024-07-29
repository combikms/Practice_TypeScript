interface Student {
    name: string;
}
interface Student {
    score: number;
}

interface Teacher extends Student {
    age: number;
}

const student: Student = { name: 'kim', score: 100 };
const teacher: Teacher = { name: 'park', score: 90, age: 30 }


type Animal = { name: string };
type Cat = { age: number } & Animal;