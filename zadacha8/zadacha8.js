// Задачи по массивам и объектам 
// Часть 1. Массивы

// zadacha1
// const products = [
//     { name: "Яблоко", category: "фрукты" },
//     { name: "Морковь", category: "овощи" },
//     { name: "Банан", category: "фрукты" },
//     { name: "Огурец", category: "овощи" },
// ];

// function groupByCategory(products) {
//     let groupedProducts = {};

//     for (let product of products) {
//         if (!groupedProducts[product.category]) {
//             groupedProducts[product.category] = [];
//         }

//         groupedProducts[product.category].push(product.name);
//     }

//     return groupedProducts;
// }

// console.log(groupByCategory(products));


// zadacha2
// const users = [
//     { id: 1, name: "Аня" },
//     { id: 2, name: "Борис" },
//     { id: 1, name: "Аня (дубль)" },
//     { id: 3, name: "Вера" },
// ];

// function removeDuplicates(users) {
//     let result = [];
//     let ids = [];

//     for (let user of users) {
//         if (!ids.includes(user.id)) {
//             ids.push(user.id);
//             result.push(user);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates(users));

// zadacha3
// const movies = [
//     { title: "A", rating: 7.8 },
//     { title: "B", rating: 9.1 },
//     { title: "C", rating: 8.4 },
//     { title: "D", rating: 6.5 },
//     { title: "E", rating: 8.9 },
// ];

// function getTopMovies(movies) {
//     return [...movies]
//         .sort((a, b) => b.rating - a.rating)
//         .slice(0, 3)
//         .map(movie => movie.title);
// }

// console.log(getTopMovies(movies));



// zadacha4
// function chunk(arr, size) {
//     if (size <= 0) {
//         return [];
//     }

//     let result = [];

//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }

//     return result;
// }

// console.log(chunk([1, 2, 3, 4, 5], 2));


// zadacha5
// const text = "Привет, мир! Привет, JS. Мир прекрасен.";

// function countWords(text) {
//     let words = text
//         .toLowerCase()
//         .replace(/[.,!?;:]/g, "")
//         .split(/\s+/);

//     return words.reduce((result, word) => {
//         result[word] = (result[word] || 0) + 1;
//         return result;
//     }, {});
// }

// console.log(countWords(text));



// zadacha6
// const orders = [
//     { customer: "Аня", sum: 500 },
//     { customer: "Борис", sum: 300 },
//     { customer: "Аня", sum: 700 },
//     { customer: "Вера", sum: 200 },
//     { customer: "Борис", sum: 450 },
// ];

// function getOrderStatistics(orders) {
//     return Object.values(
//         orders.reduce((result, order) => {
//             if (!result[order.customer]) {
//                 result[order.customer] = {
//                     customer: order.customer,
//                     total: 0,
//                     count: 0
//                 };
//             }

//             result[order.customer].total += order.sum;
//             result[order.customer].count++;

//             return result;
//         }, {})
//     ).sort((a, b) => b.total - a.total);
// }

// console.log(getOrderStatistics(orders));

// zadacha16
// const staff = [
//     { name: "Олег", dept: "IT", salary: 3000 },
//     { name: "Мария", dept: "HR", salary: 2500 },
//     { name: "Ильяс", dept: "IT", salary: 3500 },
//     { name: "Нина", dept: "HR", salary: 2500 },
// ];

// function sortStaff(staff) {
//     return [...staff].sort((a, b) => {
//         if (a.dept !== b.dept) {
//             return a.dept.localeCompare(b.dept);
//         }

//         if (a.salary !== b.salary) {
//             return b.salary - a.salary;
//         }

//         return a.name.localeCompare(b.name);
//     });
// }

// console.log(sortStaff(staff));

// 17. Индексация и поиск
// Преобразуйте массив пользователей в объект { [id]: user }, а затем напишите функцию, которая за O(1) возвращает пользователя по id и его друзей (поле friends — массив id).

// Рекомендации
// Старайтесь использовать map, filter, reduce, Object.entries, Object.fromEntries, деструктуризацию и spread.
// Не мутируйте входные данные, если это не требуется явно.
// Для каждой задачи придумайте 2–3 граничных случая (пустой массив, null, отсутствующий ключ) и проверьте решение на них.

// Если хотите, могу прислать решения к любым задачам или подготовить ещё набор уровнем сложнее.