
function counter() {
    let num2 =0;
    return function (num) {
        return num2 += num;
    }
}

let newCounter1 = counter();

console.log(newCounter1(2))
console.log(newCounter1(5))
console.log(newCounter1(10))



