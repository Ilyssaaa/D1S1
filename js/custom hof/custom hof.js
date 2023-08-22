// Custom hof that returns function
function multiplyBy(n) {
    return function(x) {
        return x * n;
    };
}

const doubled = multiplyBy(2);
console.log(doubled(5));

// Custom hof that implement callbacks
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function logNumber(n) {
    console.log(`The number is ${n}`);
}

repeat(3, logNumber);