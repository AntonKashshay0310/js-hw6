// 1

let number = 0;

while (number <= 10) {
    console.log(number);
number += 1; }

// 2

const number1 = 20;

for (let i = 0; i <= number1; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

//  3

const number2 = 140;

for (let i = 7;i <= number2; i += 7) {
    console.log(i);
}

// 4

const number3 = 47;
const n = 27;

for (let i = 0; i <= number3; i += 1) {
    if (i > n) {
        break;
    }
    console.log(i);
}

// 5

let number4 = 0;

while (number4 <= 20) {
    if (number4 % 3 === 0) {
        number4 +=1;
        continue;
    }
    console.log(number4);
    number4 +=1;
}