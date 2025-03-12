function studentMark(num) {
    let points = (num > 11) ? "Відмінно" :
        (num > 9) ? "Добре" :
            (num > 6) ? "Задовільно" :
                "Незадовільно";
    return points;
}

console.log(studentMark(8)); // Задовільно
console.log(studentMark(12)); // Відмінно
console.log(studentMark(5)); // Незадовільно
