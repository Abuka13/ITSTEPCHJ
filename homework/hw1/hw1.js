let d = 7;
console.log(d);
console.log(d * d);
console.log(d**3);
//task2
let h = 5;
console.log('h =',h);
console.log('h в квадрате = ',h*h;)
//task3
let a = +prompt('Введи число: ');
let b = +prompt('Введи число: ');
let c = a + b;
console.log('вывод: a * b',a*b);
console.log('вывод: a + b',c);
//task 4
function array(arr) {
    return arr.length;
}
arr = ['a','b','c','d'];
console.log(array(arr))
//task5
function figure(a,b,c) {
    return a * b * c;
}
let a = +prompt('Введи число: ');
let b = +prompt('Введи число: ');
let c = +prompt('Введи число: ');
console.log(figure(a,b,c));