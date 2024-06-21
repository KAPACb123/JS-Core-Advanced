function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function squareAfter3Seconds(number) {
    return delay(3000).then(() => number * number);
}

// Первый промис возвращает число
const initialPromise = Promise.resolve(2);

initialPromise
    .then(result => {
        console.log(`Первый результат: ${result}`);
        return squareAfter3Seconds(result);
    })
    .then(result => {
        console.log(`Второй результат (после возведения в квадрат): ${result}`);
        return squareAfter3Seconds(result);
    })
    .then(result => {
        console.log(`Третий результат (после возведения в квадрат): ${result}`);
        return squareAfter3Seconds(result);
    })
    .then(finalResult => {
        console.log(`Конечный результат (после возведения в квадрат): ${finalResult}`);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
