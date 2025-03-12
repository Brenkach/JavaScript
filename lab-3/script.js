function task1() {
    let sum = 0;
    let number = 1;

    while (number <= 50) {
        sum += number;
        number++;
    }
    console.log("Завдання 1. Сума перших 50 натуральних чисел: ", sum);
}

task1();

function task2() {
    const number = parseInt(prompt("Введіть число для обчислення факторіалу"));
    if (NaN || number < 0) {
        console.log("Введіть корректне значення");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`Завдання 2. Факторіал числа ${number} дорівнює ${factorial}`);
}

task2();

function task3() {
    const number = parseInt(prompt("Введіть число від 1 до 12"));
    if (NaN || number < 1 || number > 12) {
        console.log("Введіть коректне значення");
        return;
    }

    let monthName;

    switch (number) {
        case 1:
            monthName = "Січень";
            break;
        case 2:
            monthName = "Лютий";
            break;
        case 3:
            monthName = "Березень";
            break;
        case 4:
            monthName = "Квітень";
            break;
        case 5:
            monthName = "Травень";
            break;
        case 6:
            monthName = "Червень";
            break;
        case 7:
            monthName = "Липень";
            break;
        case 8:
            monthName = "Серпень";
            break;
        case 9:
            monthName = "Вересень";
            break;
        case 10:
            monthName = "Жовтень";
            break;
        case 11:
            monthName = "Листопад";
            break;
        case 12:
            monthName = "Грудень";
            break;
    }
    console.log(`Завдання 3. Місяць за номером ${number} це ${monthName}`)
}

task3();

function task4() {
    let sum = 0;
    let arr = [2, 3, 1, 2, 4];
    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num;
        }
    }
    return sum;

}

console.log(`Завдання 4. Сума парних чисел масиву: ${task4()}`);



const task5 = (str) => {
    let matches = str.match(/[аеєиіюоуя]/gi);
    return matches ? matches.length : 0;
};

console.log(`Завдання 5. Кількість голосних літер: ${task5("Привіт, як справи?")}`);




function task6(base, exponent) {
    return base ** exponent; // Або Math.pow(base, exponent)
}

console.log(`Завдання 6. Результат піднесення до степеня: ${task6(2, 4)}`); 
