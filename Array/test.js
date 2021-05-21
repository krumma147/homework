//B1
function minNumber(array) {
    var min = array[0];
    array.filter(number => {
        if (number < min) {
            min = number;
        }
    });
    return min;
}

// console.log(minNumber([2, 1, 3]));

//B2
function maxNumber(array) {
    var max = array[0];
    array.filter(number => {
        if (number > max) {
            max = number;
        }
    });
    return max;
}

// console.log(maxNumber([2, 1, 3, 4]));

//B3
function sortStudent(array) {
    array.sort().reverse();
    return array;
}

// console.log(sortStudent(['Nam', 'Hoa', 'Tuấn']));

//B4

function Sum() {
    var i = 0;
    var sum = 0;
    while (i < 100) {
        if (i % 5 == 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

// console.log(Sum());

//B5

function convertNumberArray(array) {
    const output = array.map(number => number % 2);
    return output;
}
// console.log(convertNumberArray([5, 3, 6, 8, 2]));

//B6

function filterlongest(array) {
    const output = [];
    const max = array[0].length;
    array.map(string => {
        if (string.length >= max) {
            output.push(string);
        }
        return output;
    })
    return output;
}

// console.log(filterlongest(['aba', 'aa', 'ad', 'c', 'vcd']));

//B7

function randomElement(array) {
    const number = array.length;
    const index = Math.floor(Math.random() * number);
    return array[index];
}

// console.log(randomElement([3, 7, 9, 11]));

//B8

function swapRandom(array) {
    const number = array.length;
    const index1 = Math.floor(Math.random() * number);
    const index2 = Math.floor(Math.random() * number);
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
}

// console.log(swapRandom([3, 7, 9, 11, 5, 19]));

//B9

function similarity(array1, array2) {
    const output = [];
    array1.filter(number1 => {
        array2.filter(number2 => {
            if (number2 == number1) {
                output.push(number2);
            }
        })
    })
    return output;
}

// console.log(similarity([1, 2, 3, 6, 9], [4, 3, 2, 5, 7, 9]));

//B10