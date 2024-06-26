function eventLoopFunc(data) {
    return new Promise((resolve, reject) => {
        if (typeof data === 'number') {
            if (data % 2 === 0) {
                setTimeout(2000, resolve('Even'));
            } else {
                setTimeout(1000, resolve('Even'));
            }
        } else {
            reject(new Error('Error: Input is not a number'));
        }
    });
}

eventLoopFunc(4)
    .then(result => console.log(result))
    .catch(error => console.error(error));

eventLoopFunc(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));

eventLoopFunc('text')
    .then(result => console.log(result))
    .catch(error => console.error(error));


