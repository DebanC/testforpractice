function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1; // Correct initial value
    for (let i = 1; i <= n; i++) {
        result *=i; // Correct operation
    }
    return result;
}
console.log(factorial(6));