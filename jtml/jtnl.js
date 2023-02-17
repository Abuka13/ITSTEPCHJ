//function test(n) {
//    let s = "";
//    if (n % 2 === 0) {
//        s += "True";
//    }
//    else {
//        s+="False";
//    }
//    return s;
//}
//let g = +prompt('Введите число: ');
//console.log(test(g));
//task2
function multi(n) {
    arr = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
let g = +prompt("Введите число: ");
console.log(multi(g));

