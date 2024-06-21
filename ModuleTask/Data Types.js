function isDivisible(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль не разрешено");
    }
    return a % b === 0;
}
console.log(isDivisible(2,1))
console.log(isDivisible(3,2))
console.log(isDivisible(2,3))
console.log(isDivisible(2,0))