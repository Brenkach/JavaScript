function getSeason(month) {
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            return "Spring";
        } else if (month >= 6 && month <= 8) {
            return "Summer";
        } else if (month >= 9 && month <= 12) {
            return "Autumn";
        } else {
            return "Winter";
        }
    } else {
        return "Incorrect month number";
    }
}

console.log(getSeason(8));
console.log(getSeason(9));