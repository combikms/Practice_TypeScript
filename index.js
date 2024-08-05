// class User {
//     protected x = 10;
// }
// class NewUser extends User {
//     foo() {
//         this.x = 20;
//     }
// }
// class User {
//     static x = 10;
//     y = 20;
// }
// const u1 = new User();
// console.log(u1); // y = 20 만 출력 
// class User {
//     static departure = "CE";
//     intro = "I'm " + User.departure + " professor.";
// }
// const u1 = new User();
// console.log(u1);
// User.departure = 'EE'
// const u2 = new User();
// console.log(u2);
// class User {
//     private static x = 10;
//     public static y = 20;
//     static addOne = (num) => {
//         User.x += num;
//     };
//     static printX = () => {
//         console.log(User.x);
//     };
// }
// User.addOne(3) //이렇게 하면 x가 3 더해져야함
// User.addOne(4) //이렇게 하면 x가 4 더해져야함
// User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
class Square {
    width;
    height;
    color;
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        const a = Math.random();
        const square = `<div style="position:relative; 
        top:${a * 400}px; 
        left:${a * 400}px; 
        width:${this.width}px; 
        height : ${this.height}px; 
        background:${this.color}"></div>`;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}
const s = new Square(30, 30, 'red');
s.draw();
s.draw();
s.draw();
s.draw();
