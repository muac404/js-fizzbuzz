"use strict"

const boardContainer = document.querySelector('.container')

for (let i = 1; i < 101; i++){
    
    
    if (i % 3 === 0 && i % 5 === 0){
        let result = "FizzBuzz"
        console.log("FizzBuzz")
        const boardNumber = document.createElement('div')
        boardNumber.classList.add('casella')
        
        boardNumber.innerHTML = result
        boardContainer.append(boardNumber)
        boardNumber.classList.add('red__style')

    }

    else if (i % 3 === 0){
        let result = "Fizz"
        console.log("Fizz")
        const boardNumber = document.createElement('div')
        boardNumber.classList.add('casella')
        boardNumber.innerHTML = result
        boardContainer.append(boardNumber)
        boardNumber.classList.add('green__style')
    }

    else if (i % 5 === 0){
        let result = "Buzz"
        console.log("Buzz")
        const boardNumber = document.createElement('div')
        boardNumber.classList.add('casella')
        boardNumber.innerHTML = result
        boardContainer.append(boardNumber)
        boardNumber.classList.add('yellow__style')
    }


    else {
        let result = i
        console.log(i)
        const boardNumber = document.createElement('div')
        boardNumber.classList.add('casella')
        boardNumber.innerHTML = result
        boardContainer.append(boardNumber)
    }   
    
    
    
}


