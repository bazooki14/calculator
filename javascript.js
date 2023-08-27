let ans;


let add = function(ans, b) {
    let newAns = (ans + b);

    return newAns;
};

let subtract = function(ans, b) {
    let newAns = (ans - b);

    return newAns;
};

let multiply = function(ans, b) {
    let newAns = (ans * b);

    return newAns;
};

let divide = function(ans, b) {
    let newAns = (ans / b);

    ans = newAns;

    return newAns;
};

let firstNum;
let nextNum;
let operator;

let operate = function() {
    if (operator === "+") {
        add(firstNum, nextNum);
    }
};