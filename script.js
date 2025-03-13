const addition = document.querySelector("#addition");
addition.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#inputOne").value;
    const inputTwo = +document.querySelector("#inputTwo").value;
    document.querySelector("#result").value = inputOne + inputTwo;
})

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#inputOne").value;
    const inputTwo = +document.querySelector("#inputTwo").value;
    document.querySelector("#result").value = inputOne - inputTwo;
})

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#inputOne").value;
    const inputTwo = +document.querySelector("#inputTwo").value;
    document.querySelector("#result").value = inputOne * inputTwo;
})

const division = document.querySelector("#division");
division.addEventListener("click",()=>{
    const inputOne = +document.querySelector("#inputOne").value;
    const inputTwo = +document.querySelector("#inputTwo").value;
    document.querySelector("#result").value = inputOne / inputTwo;
})