function getSeasonTernary(month) {
    return (month >= 3 && month <= 5) ? "Spring" :
        (month >= 6 && month <= 8) ? "Summer" :
            (month >= 9 && month <= 11) ? "Autumn" :
                (month >= 1 && month <= 12) ? "Winter" :
                    "Incorrect month number";
}

console.log(getSeasonTernary(1));
console.log(getSeasonTernary(6));
console.log(getSeasonTernary(9));
console.log(getSeasonTernary(4));