//B1
function getCurrentDate() {
    const day = new Date();
    return day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();
}

// console.log(getCurrentDate());

//B2 -- sửa lại logic

function getDaysInMonth(month, year) {
    const day = new Date();
    day.setMonth(month);
    day.setFullYear(year);
    return day.getDate();
}

// console.log(getDaysInMonth(8, 2020));

//B3 : chưa có dữ liệu đầu vào
function checkWeekend() {
    const day = new Date();
    if (day.getDay() >= 0 && day.getDay() <= 6) {
        return false;
    }
    return true;
}

console.log(checkWeekend());

//B4: chưa hiểu rõ đề

//B5:
function daysPassed() {
    const present = new Date();
    const begin = new Date(present.getFullYear(), 0, 1, 0, 0, 0, 0);
    const days = Math.round((present.valueOf() - begin.valueOf()) / 1000 / 3600 / 24);
    return days + " days have passed";
}

// console.log(daysPassed());

//B6:

function getAge(dateofbirth) {
    const birth = Date.parse(dateofbirth);
    const present = new Date;
    return Math.round((present.valueOf() - birth.valueOf()) / 1000 / 3600 / 24 / 365);
}

// console.log(getAge("5-23-2001"));

//B9: