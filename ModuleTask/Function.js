function SearchFirstNonRepeatingCharacter(inputText){
    let SymbolFrequency = new Set(inputText);
    let Counter = 0;
    for(let Character of SymbolFrequency){
        for(let i = 0; i < inputText.length; i++){
            if(Character === inputText[i])
                Counter++;
        }
        if(Counter === 1)
            return Character
        Counter = 0;
    }
}

console.log(SearchFirstNonRepeatingCharacter('ipsum dolor sit amet, consectetur adipiscing'))