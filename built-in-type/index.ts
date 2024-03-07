// built in type: number, string, boolean, void, undefined, null


let useId: number;
let lastName: string;
let firstName: string;
let fullName: string;
let isActivated: boolean;

useId = 101;
firstName = "Tarek"
lastName="rahman"
isActivated = true;

// concatinate
fullName = firstName.concat(lastName);

console.log(`Your id: ${useId}, username: ${fullName}, account activated: ${isActivated}`);

console.log(fullName.split(""));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase());



// ==================
function display(): void{
    console.log("Hi I am display");
}
display();

