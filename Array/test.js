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