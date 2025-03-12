function diapason(num) {
    if (!(num >= 1 && num <=10)) {
        return true;
    } else {
        return false;
    }
}

console.log(diapason(3));
console.log(diapason(18));