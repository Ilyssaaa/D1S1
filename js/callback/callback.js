// Callback function
function hello() {
    console.log("Hello World");
}

function print(callback) {
    callback();
}

print(hello);