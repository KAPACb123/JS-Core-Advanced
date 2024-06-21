function minValue(ArrayOfNumbers){
    let result = ArrayOfNumbers[0]
    for(let i=1; i<=ArrayOfNumbers.length; i++){
        if(result>ArrayOfNumbers[i])
            result = ArrayOfNumbers[i]
    }
    return result
}

console.log(minValue([-1,2,3,1]))