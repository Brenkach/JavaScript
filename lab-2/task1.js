// мін та мах в масиві
function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { min, max };
}

//порівняння
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const result1 = findMinMax([1, 2, 8, 2]);
const result2 = findMinMax([0, 4, 8, 10]);

console.log(`Результат 1: Мінімальне: ${result1.min}, Максимальне: ${result1.max}`);
console.log(`Результат 2: Мінімальне: ${result2.min}, Максимальне: ${result2.max}`);

// Порівняння двох результатів
console.log(compareObjects(result1, result2)); // false
