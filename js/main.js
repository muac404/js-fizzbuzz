"use strict"


for (let i = 1; i < 101; i++){
     console.log(i)

    if (i % 3 === 0){
        let result = "Fizz"
        console.log(result)
    }

    if (i % 5 === 0){
        let result = "Buzz"
        console.log(result)
    }

    if (i % 3 === 0 && i % 5 === 0){
        let result = "FizzBuzz"
        console.log(result)
    }




    if (i % 3 != 0 || i % 5 != 0){
        let result = i
        console.log(result)
    }
}


