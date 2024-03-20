class User{
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    display(): void{
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// class object
// user1 - name: tarek, age: 24
// user2 - name: sumu, age: 23 

let user1 = new User("tarek", 24);
user1.display();

let user2 = new User("sumu", 23);
user1.display();

let user3 = new User("rabbi", 29);
user1.display();

