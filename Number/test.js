//B1

function TheTichHinhCau(r) {
    return (4 * 3.14 * (r ** 3)) / 3;
}

// console.log(TheTichHinhCau(2));

//B2

function sumBetween(number1, number2) {
    var sum = 0;
    while (number1 < number2) {
        number1++;
        sum += number1;
    }
    return sum - number2;
}

// console.log(sumBetween(3, 9));

//B3

function checkPalindrome(number) {
    var i = 2;
    var count = 0;
    while (i <= Math.sqrt(number)) {
        if (number % i == 0) {
            count++;
        }
    }
    return count == 0;
}

console.log(checkPalindrome(4));

//B4