"use strict"


for (let i = 1; i < 101; i++){
    
    
    if (i % 3 == 0 && i % 5 == 0){
        let result = "FizzBuzz"
        console.log("FizzBuzz")
    }

    else if (i % 3 === 0){
        let result = "Fizz"
        console.log("Fizz")
    }

    else if (i % 5 === 0){
        let result = "Buzz"
        console.log("Buzz")
    }


    else {
        let result = i
        console.log(i)
    }   
    
    
    
}


