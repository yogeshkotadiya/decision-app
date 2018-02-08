class Customer {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return `Hi I'm ${this.name} and I'm ${this.age} year(s) old.`;
    }


}

class Traveller extends Customer {          //Extending Parent class with sub class

    constructor(name, age, location){
        super(name,age);                    // Calling constructor fn from parent class
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }

    getGreetings(){                     //Overriding method from parent class

        let greeting = super.getGreetings();

        if(this.hasLocation()){
            greeting += ` My Home Location is ${this.location}`;
        }

        return greeting;
    }
}

let customerOne = new Traveller('Yogesh', 23,'Mumbai');
console.log(customerOne.getGreetings());        // Hi I'm Yogesh and I'm 23 years(s) old. My Home Location is Mumbai

let customerTwo = new Traveller();
console.log(customerTwo.getGreetings());        //Hi I'm Anonymous and I'm 0 year(s) old.