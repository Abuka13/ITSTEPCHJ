function greet() {
    console.log("Hello");
    return "hello"
}
function respond() {
    return setTimeout(() => {
       console.log("Hey") 
    }, 1000);
}
greet()
respond()
