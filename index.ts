let username: 'EG' | 'ZG';
username = 'EG';
username = 'ZG';
username = 'GG'; // Error

function foo(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
    return ['바위', '보']
}

const obj = {
    name: 'kim'
} as const

function boo(a: 'kim') {

}

boo(obj.name); // Error