try{
    console.log(Variable)
}
catch(e){
    if(e.name === 'ReferenceError'){
        console.error('Variable is not defined')
    }
}