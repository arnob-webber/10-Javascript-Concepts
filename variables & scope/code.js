var globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

console.log(localVar); // Error: localVar is not defined
