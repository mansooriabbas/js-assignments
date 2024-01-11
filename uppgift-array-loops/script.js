
// ### Arrays exercises 2

// 1. Create an empty array and fill it with different elements using the push-method. Log it to the console.

// const arr = []

// arr.push(2,3,"Hello",12,"Goodbye",66)
// console.log(arr);

// 2. Create an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.

// const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// arr.forEach((num) => {
//   num *= 3;
//   console.log(num);
// });

// 3. Create an array with numbers, and one empty array. Loop through the array with numbers and do an if check in each iteration. If that number is bigger then a specific number, 5 for example, add that number to the empty array. Log the new array to the console in the end. Remember to use the indexes to get the elements from the array with numbers.

// const arr = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
// const arr2 = []

// arr.forEach((num) => {
//     if(num > 5){
//         arr2.push(num)
//     }
// })
// console.log(arr2);

// 4. Create an array with random numbers. Loop through the array and add them all together. Log the total sum of all the elements to the console. `hint` - You will need a variable here that store the sum as you iterate over the array.

// const arr = [];
// while (arr.length < 10) {
//   const randomNR = Math.floor(Math.random() * 10);
//   arr.push(randomNR);
// }

// let result = 0;
// arr.forEach((num) => {
//   result += num;
// });

// console.log(arr);
// console.log(result);

// 5. Create an array with some elements. Now search for a specific element while you are looping through the array. If you find the element you are searching for, log it to the console.

// const array = ["Tom", 2, 3, 4, 5, "Goodbye"];

// array.forEach((arr) => {
//     if(arr === "Tom"){
//         console.log(arr);
//     }
// })

// 6. Create an array with some elements, remove the last element **WITHOUT** using `pop()`.

// const array = ["Tom", 2, 3, 4, 5, "Goodbye"];

// array.splice(5, 1)
// console.log(array);

// 7. Create an array with 10 different numbers. Find the biggest number in the array and log it to the console. `hint` - You will need a variable that holds the current biggest number.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let maxNumber = array[0]

// array.forEach((num) => {
//     if(num > maxNumber) {
//         maxNumber = num
//     }
// })
// console.log(maxNumber);

// 8. Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.

// const array = ["Tom", 2, 3, 4, 5, "Hello"];
// const array2 = [];

// for (let i = 0; i < array.length; i++) {
//     array2.push(array[i])
// }
// console.log(array2);

// 9. Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.

const array = ["Tom", 2, 3, 4, 5, "Hello"];
while(array.length > 0){
    array.pop()
    console.log(array);
}