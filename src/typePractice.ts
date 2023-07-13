
interface TtwoSum {
    num1: number ,
    num2: number ,
    message?: string
}



// export const twoSum = (num1: number, num2: number, message?: string) => {

//     return console.log(`this is the sum = ${num1 + num2} and here is message ${message}`)
// }

export const twoSum = (obj: TtwoSum) => {
    return console.log(`this is the sum = ${obj.num1 + obj.num2} and here is the message ${obj.message}`)
}
