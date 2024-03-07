// built in type: number, string, boolean, void, undefined, null
var useId;
var lastName;
var firstName;
var fullName;
var isActivated;
useId = 101;
firstName = "Tarek";
lastName = "rahman";
isActivated = true;
// concatinate
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(useId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(""));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase());
// ==================
function display() {
    console.log("Hi I am display");
}
display();
