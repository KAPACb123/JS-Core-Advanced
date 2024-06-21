class University{
    constructor(NameOfUniversity){
        this.NameOfUniversity = NameOfUniversity;
        this.Faculties = [];
    }

    AddFaculty(Faculty){
        if(!this.Faculties.includes(Faculty)){
            this.Faculties.push(Faculty);
            console.log(`Adding ${Faculty}`)
        }
        else{
            console.log(`${Faculty} already exists`)
        }
    }

    RemoveFaculty(Faculty){
        if(this.Faculties.includes(Faculty)){
            this.Faculties.splice(this.Faculties.indexOf(Faculty),1)
            console.log(`Removing ${Faculty}`)
        }
        else{
            console.log(`${Faculty} not found`)
        }
    }

    DisplayFaculty(){
        if(this.Faculties.length !== 0){
            console.log(`Faculties of ${this.NameOfUniversity}`)
            for(let Faculty of this.Faculties){
                console.log(`${Faculty}`)
            }
        }
        else{
            console.log('Faculties not found')
        }
    }
}

let firstUniversity = new University('BSTU');

firstUniversity.AddFaculty('FIRST FACULTY');
firstUniversity.AddFaculty('SECOND FACULTY');
firstUniversity.AddFaculty('THIRD FACULTY');

firstUniversity.DisplayFaculty();

firstUniversity.RemoveFaculty('FIRST FACULTY');

firstUniversity.DisplayFaculty();

