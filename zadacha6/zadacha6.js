// 1
// let age = 15;
// if (agre < 12) {
//     console.log("ребенок");
// } else if (age <= 17) {
//     console.log("подросток");
// } else {
//     console.log("взрослый");
// }

// let age = 15;
// console.log(age < 20);

//2
// let month = 7;
// if (month === 12 || month === 1 || month === 2) {
//     console.log("зима");
// } else if (month >= 3 && month <= 5) {
//     console.log("весна");
// } else if (month >= 6 && month <= 8) {
//     console.log("лето");
// } else if (month >= 9 && month <= 11) {
//     console.log("осень");
// } else {
//     console.log("Неверный запрос, повторите попытку с другими данными");
// }

// const age = month == 1 ? 20 : 0; 





//3
// let age = 15;
// switch (true) {
//     case age < 12:
//         console.log("ребенок");
//         break;
//     case age <= 17:
//         console.log("подросток");
//         break;
//     default:
//         console.log("взрослый");
// }



// let month = 7;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("зима");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("весна");
//         break;

//     case 6 :
//     case 7:
//     case 8:
//         console.log("лето");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("осень");
//         break;

//     default:
//         console.log("Неверный запрос, повторите попытку с другими данными");
// }

// //Function
// //1
// function hasAccess(age, name) {
//     if  (age < 18 && name === "Alisher"){
//         console.log("Доступ Разрешon");
//     }
//     else if (age < 18 && name !== "Alisher"){
//         console.log("Доступ Разрешon")
//     }
//     else{
//         console.log("Доступ Запрещен")
//     }
// }
// hasAccess(15, "Alisher")




// //2
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(5, 10));

// //3
// function isEven(a, b){
//     if (a % 2 === 0 && b % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(5, 10));