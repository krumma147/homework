//B1 - thêm check arr - bỏ var dùng let
function minNumber(array) {
    let min = array[0];
    array.filter(number => {
        if (number < min) {
            min = number;
        }
    });
    return min;
}

// console.log(minNumber([2, 1, 3]));

//B2 // tìm số lớn thứ 2 
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

//B4 thử dùng filter

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

//B5 check mảng

function convertNumberArray(array) {
    if (Array.isArray(array)) {
        const output = array.map(number => number % 2);
        return output;
    }
    return "Error, Input Is Not an Array";
}
console.log(convertNumberArray([5, 3, 6, 8, 2]));

//B6 --

function filterlongest(array) {
    if (Array.isArray(array)) {
        let max = array[0].length;
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > max) {
                max = array[i].length;
            }
        }
        const output = array.filter(string => string.length >= max);
        return output;
    }
    return "Error, Input Is Not an Array";
}

// console.log(filterlongest(['aa', 'aba', 'ad', 'c', 'vcd', 'asdd']));

//B7

function randomElement(array) {
    if (Array.isArray(array)) {
        const number = array.length;
        const index = Math.floor(Math.random() * number);
        return array[index];
    }
    return "Error, Input Is Not an Array";
}

//console.log(randomElement([3, 7, 9, 11]));

//B8

function swapRandom(array) {
    if (Array.isArray(array)) {
        const number = array.length;
        const index1 = Math.floor(Math.random() * number);
        const index2 = Math.floor(Math.random() * number);
        [array[index1], array[index2]] = [array[index2], array[index1]]; //update ý tưởng
        return array;
    }
    return "Error, Input Is Not an Array";
}

// console.log(swapRandom([3, 7, 9, 11, 5, 19]));

//B9 cần tối ưu thuật toán - sai trong trường hợp trong 1 mảng có 2 ptu bằng nhau

function similarity(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        const output = [];
        array1.filter(number1 => {
                for (const number2 of array2) {
                    if (number1 == number2) {
                        output.push(number1)
                    }
                }
            })
            // })
            // for (const number1 of array1) {
            //     for (const number2 of array2) {
            //         if (number1 == number2) {
            //             output.push(number1)
            //         }
            //     }
            // }
        return output.sort();
    }
    return "Error, Input Is Not an Array";
}

//console.log(similarity([1, 2, 3, 6, 9], [4, 3, 2, 5, 7, 9])); //2,3,9

//B10 // Cần tối ưu thuật toán - sai trong trường hợp 1 mảng chứa 2 ptu giống nhau
function symmetricDifference(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        // array1.filter(number1 => {
        //     array2.filter(number2 => {
        //         if (number2 == number1) {
        //             output.push(number2);
        //         }
        //     })
        // })
        const simila = similarity(array1, array2);
        const arr = array1.concat(array2).sort();
        simila.filter(number => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == number) {
                    arr.splice(i, 2); // số lượng cắt = 2 bởi ở đây có 2 mảng luôn chứa ít nhất 2 ptu = nhau
                }
            }
        })
        return arr;
    }
    return "Error, Input Is Not an Array";
}

console.log(symmetricDifference([1, 2, 3, 5, 9, 8, 6], [4, 3, 2, 9, 6])); //1,2,2,3,3,4,5,6,6,8,9,9 -- 2,3,9,6

//B12

function random_hex_color_code() {
    const HEX = [];
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    HEX.push(r, g, b);
    return HEX;
}

// console.log(random_hex_color_code());

//B14 - bỏ else

function checkIncrease(array) {
    var i = 0;
    while (array[i] < array[i + 1]) {
        i++;
    }
    if ((i + 1) == array.length) {
        return true;
    }
    return false;
}

// console.log(checkIncrease([2, 4, 8, 6]));

//B15
function checkDecrese(array) {
    var i = 0;
    while (array[i] >= array[i + 1] && array[i] % 2 != 0) {
        i++;
    }
    if ((i + 1) == array.length && array[array.length - 1] % 2 != 0) {
        return true;
    }
    return false;
}

//console.log(checkDecrese([9, 7, 5, 3, 2])); //Thuat toan hoi dai,