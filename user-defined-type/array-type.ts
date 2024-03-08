// let userNames: string [];
let userNames: Array<string>;
let userId: number[];

userNames = ["tarek", "sumu", "anis"];
console.log(userNames[0]);


// multiple types array(must give parenthisis)
let multipleTypes: (string | number)[];
multipleTypes = [1, "tarek"];
console.log(multipleTypes[0]);

// sort problem(alphabetical)
userNames.sort();
console.log(userNames);