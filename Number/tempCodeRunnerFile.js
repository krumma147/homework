function checkPalindrome(number) {
    var i = 2;
    var count = 0;
    while (i <= Math.sqrt(number)) {
        if (number % i == 0) {
            ++i;
            ++count;
        }
    }
    return count == 0;
}

console.log(checkPalindrome(5));