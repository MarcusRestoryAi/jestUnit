let fadd = (a, b) => {
    let sum = a + b;
    return sum;
}

let fsub = (a, b) => {
    return a - b;
}

let myObj = {
    add : fadd,
    sub : fsub
}

module.exports = myObj;