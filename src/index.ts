// 2 ways for typescript to add type
//1. Implicit
//2.Explicit


//Implicit
let fName = 'Jonathan' //string

//fName = 1243 // fall

//Explicit
let lName: string | number | boolean | undefined = 'Sanchez'

lName = 3445
lName = false


import { twoSum } from "./typePractice";

twoSum({num1: 5, num2: 9, message: `test`})