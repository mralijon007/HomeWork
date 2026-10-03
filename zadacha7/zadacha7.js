//Цыклы
// 1.Используя цикл выведи числа от 10 до 0
// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }

// 2. Есть переменная n, которая хранит число, выведи все числа от 1 до n
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 3. Выведи все четные числа от 1 до 100
// let evenNumbers = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//     }
// }
// console.log(evenNumbers);



//Практика 
// 1
// let movies = ["Фильм 1", "Фильм 2", "Фильм 3", "Фильм 4", "Фильм 5"];
// console.log(movies);
// console.log(movies[1]);
// console.log(movies[movies.length - 1]);
// movies.push("Форрест Гамп")
// console.log(movies[movies.length - 1]);
// console.log(movies.shift());
// console.log(movies[2] = "Матрица");
// console.log(movies.length);
// console.log(movies);


// 2
// for (let i = 1; i <= 5; i++) {
//     console.log(i + 2);
// }



// 13.Создай объект person с полями: name, age, city.
// 14.Выведи имя человека из объекта.
// 15.Добавь новое поле hobby со значением "программирование".
// 16.Измени возраст на 30.
// 17.Удалите поле city.



// 3
// let names = ["Мухаммад", "Али", "Зухра", "Саид"];
// names.sort();
// console.log(names);


// 4
// let movies = ["Фильм 1", "Фильм 2", "Фильм 3", "Фильм 4", "Фильм 5"];
// movies.push("Интерстеллар");
// console.log(movies.includes("Интерстеллар"));
// console.log(movies.includes("Фильм 1"));

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }


// 5
// let movies = ["Фильм 1", "Фильм 2", "Фильм 3", "Фильм 4", "Фильм 5"];
// let moviesWithRating = movies.map(function(movie, index) {
//     return {
//         name: movie,
//         rating: index + 1
//     };
// });
// let goodMovies = moviesWithRating.filter(function(movie) {
//     return movie.rating > 3;
// });

// console.log(goodMovies);



// 6
// let person = {
//     name: "Али",
//     age: 25,
//     city: "Душанбе"
// }
// console.log(person.name);
// person.hobby = "программирование";
// console.log(person);
// person.age = 30;
// console.log(person);
// delete person.city;
// console.log(person);







// Функсия


// let user = {
//     name: "Али",
//     age: 20,
//     email: "ali@gmail.com"
// }
// function showUser(user) {
//     console.log(`Имя: ${user.name}, Возраст: ${user.age}, E-mail: ${user.email}`);
// }
// showUser(user);




// let products = {
//     телефон: 500,
//     мышка: 150,
//     клавиатура: 300,
//     наушники: 200
// };
// function showExpensiveProducts(products) {
//     for (let product in products) {
//         if (products[product] > 250) {
//             console.log(`Товар: ${product}, Цена: ${products[product]}`);
//         }
//         else {
//             console.log(`дешевый товар`);
//         }
//     }
// }
// showExpensiveProducts(products);




// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020
// }
// function getCarInfo(car) {
//     return `Год выпуска ${car.year}, Модель ${car.brand} ${car.model}`;
// }
// console.log(getCarInfo(car));




// let students = [
//     { name: "Али", age: 20, grade: 5 },
//     { name: "Саид", age: 18, grade: 4 },
//     { name: "Зухра", age: 22, grade: 5 }
// ];
// function getAverageAge(students) {
//     let sum = 0;
//     for (let student of students) {
//         sum += student.age;
//     }
//     return sum / students.length;
// }
// console.log(getAverageAge(students));




// function isEven(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(10));
// console.log(isEven(7));




// let numbers = [10, 20, 30, 40];
// function getSum(numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(getSum(numbers));




// const multiply = (a, b) => {
//     return a * b;
// };
// console.log(multiply(5, 4));