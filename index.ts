class User {
    public name: string;
    private familyName: string = 'kim';
    constructor(name: string) {
        this.name = this.familyName + ' ' + name;
    }
}

const u1 = new User('gilsan');
console.log(u1.name);

u1.familyName = 'park'; // Error: 가족 성씨는 private하여 자식이 못 바꿈