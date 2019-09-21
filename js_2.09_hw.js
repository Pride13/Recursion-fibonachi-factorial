//recursion
let arr = [2, 6, [5678, 99], 5,6];
function recursion(i) {
    if (i < arr.length) {
        if (Array.isArray(arr[i])){
            arr[i].forEach((array) =>{
                i++;
                console.log(array);
            });
        }
        console.log(arr[i]);
        i++;
        recursion(i);
    }

}
recursion(0);


let arr = [1, {name: "Ola", car: "true"}, 53, 3, [5, [2, [2,5,5,['HELOO'],3,5]], -1, 87], 9];

function recursator3000(arrayToOpen) {
    if (!Array.isArray(arrayToOpen)) return;

    arrayToOpen.forEach(value => {
        if (Array.isArray(value)){
            recursator3000(value);
            return;
        }

        if (typeof value === 'object' && Object !== null) {
            let arrayOfValuer = Object.values(value);
            recursator3000(arrayOfValuer);
            return;
        }
        console.log(value);
    })
}
recursator3000(arr);

//3.09.19 factirial / fibonachi
//factorial way1
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(4));
//factorial way2
function factorial(number, cb) {
    let result = 1;

    if (number !== 1 ){
        result = number * cb(number -1, cb);
    }
    return result
}

console.log(factorial(5, factorial));

//фібоначі
function fibonachi(max) {
    let result = [0,1];

    for (let i = 1; result[i] < max; i++) {
        result.push(result[i] + result[i - 1]);
    }
    console.log(result);
}
fibonachi(10);


