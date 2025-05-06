console.log("Завдання 1");

let fruits = ["Яблуко", "Слива", "Банан"];

function processFruits(array) {
    array.pop(); 
    console.log("Масив після видалення останнього елемента:", array);

    array.unshift("Ананас");
    console.log("Масив після додавання 'Ананас':", array);

    array.sort((a, b) => b.localeCompare(a));
    console.log("Масив у зворотному алфавітному порядку:", array);

    let appleIndex = array.findIndex(fruit => fruit === "Яблуко");
    console.log("Індекс елемента 'Яблуко':", appleIndex);
}

processFruits(fruits);



console.log("Завдання 2");

function processColors() {
    let colors = ['рожевий', 'жовтий', 'синій', 'червоний'];

    let longest = colors.reduce((a, b) => a.length > b.length ? a : b);
    console.log("Найдовший елемент:", longest);

    let shortest = colors.reduce((a, b) => a.length < b.length ? a : b);
    console.log("Найкоротший елемент:", shortest);

    let filteredColors = colors.filter(color => color.includes("синій"));
    console.log("Рядки, що містять слово 'синій':", filteredColors);

    let resultString = colors.join(',');
    console.log("Об'єднаний рядок:", resultString);

    return resultString;
}

processColors();


console.log("Завдання 3");

function task3() {
    let users = [
        { name: "Олексій", age: 23, pos: "Розробник" },
        { name: "Петя", age: 34, pos: "Тестувальник" },
        { name: "Марія", age: 18, pos: "Розробник" }
    ];

    users.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Відсортований масив за іменами: ", users);

    let someUsers = users.filter(item => item.pos == "Розробник");
    console.log("Працівники, які мають посаду розробник: ", someUsers);

    let delAge = (users) => {
        for (let i = users.length - 1; i >= 0; i--) { 
            if (users[i].age < 20) {
                users.splice(i, 1); 
            }
        }
    };

    delAge(users);
    console.log("Видалено працівників віком менше 20: ", users);

    users.push({ name: "Юлія", age: 18, pos: "Адміністратор" });
    console.log("Додано нового працівника: ", users);

}
task3();

console.log("Завдання 4");

function studentsArr() {
    let students = [
        { name: "Олексій", age: 17, course: 1 },
        { name: "Людмила", age: 19, course: 3 },
        { name: "Андрій", age: 18, course: 2 },
    ]
    console.log("Масив студентів: ", students);

    let delStud = (students) => {
        for (let i = students.length - 1; i >= 0; i--) { 
            if (students[i].name == "Олексій") {
                students.splice(i, 1); 
            }
        }
    };

    delStud(students);
    console.log("Видалено студента з імям Олексій: ", students);

    students.push({ name: "Юлія", age: 18, course: 2 });
    console.log("Додано нового студента: ", students);

    students.sort((a, b) => b.age - a.age);
    console.log("Студенти, відсортовані за віком: ", students);

    let someStudent = students.filter(item => item.course == 3);
    console.log("Студент який навчаєтья на 3 курсі: ", someStudent);
}

studentsArr();

console.log("Завдання 5");

function task5() {
    let arr = [2, 3, 2, 4].map(item => item ** 2);
    console.log(arr); // 4,9,4,16

    let isEven = arr.filter(item => item % 2 == 0 ? item : 0);
    console.log(isEven);

    let sumArr = arr.reduce((a, b) => a + b);
    console.log("Сума елементів:", sumArr);

    let newArray = arr.concat([3, 4, 6, 2, 8]);
    console.log("Новий масив: ", newArray);

    console.log("Видалимо перші 3 елементи:", newArray.splice(0, 3));
    console.log(newArray);

}

task5();

console.log("Завдання 6");
console.log("Бібліотека");

function libraryManagment() {
    let books = [
        {
            title: "Тіні забутих предків",
            author: "Михайло Коцюбинський",
            genre: "Класика",
            pages: 256,
            isAvailable: false
        },
        {
            title: "Лісова пісня",
            author: "Леся Українка",
            genre: "Драма",
            pages: 112,
            isAvailable: true
        },
        {
            title: "Гаррі Поттер і філософський камінь",
            author: "Джоан Роулінг",
            genre: "Фентезі",
            pages: 332,
            isAvailable: true
        }
    ];
 


    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
    }

    function removeBook(title) {
        let index = books.findIndex(book => book.title === title);
        if (index !== -1) {
            books.splice(index, 1);
            console.log(`Книга "${title}" була видалена.`);
        } else {
            console.log(`Книга "${title}" не знайдена.`);
        }
    }

    function findBooksByAuthor(author) {
        let foundBooks = books.filter(book => book.author === author);
        console.log(`Книги автора "${author}":`, foundBooks);
        return foundBooks;
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
            console.log(`Статус книги "${title}" змінено на ${book.isAvailable ? "доступна" : "взята"}`);
        } else {
            console.log(`Книга "${title}" не знайдена.`);
        }
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
        console.log("Книги після сортування за сторінками:", books);
    }

    function getBooksStatistics() {
        let totalBooks = books.length;
        let availableBooks = books.filter(book => book.isAvailable).length;
        let borrowedBooks = totalBooks - availableBooks;
        let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
        let avgPages = totalBooks > 0 ? (totalPages / totalBooks).toFixed(2) : 0;

        return { totalBooks, availableBooks, borrowedBooks, avgPages };
    }

    // Демонстрація роботи
    addBook("Соляріс", "Станіслав Лем", "Наукова фантастика", 204);
    console.log("Оновлений список книг:", books);

    removeBook("Лісова пісня");
    console.log("Після видалення книги:", books);

    findBooksByAuthor("Джоан Роулінг");

    toggleBookAvailability("Тіні забутих предків", false);
    toggleBookAvailability("Гаррі Поттер", true);

    sortBooksByPages();

    console.log("Статистика про книги:", getBooksStatistics());
}

libraryManagement();


console.log("Завдання 7")

function task7() {
    let student =
    {
        name: "Олексій",
        age: 17,
        course: 1
    }

    console.log("Об'єкт студент: ", student);

    student.subjects = ["Англійська", "Математика"];
    console.log("Масив після додавання властивості: ", student);

    delete student.age;
    console.log(student);
}

task7();