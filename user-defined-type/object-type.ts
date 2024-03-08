// let users: object[];
// users = [{userName: "tarek"}, {userName: "rafi"}];


let users: object[];
users = [];

let user1: {
    userName: string,
    userId: number,
}
user1 = {userName: "tarek", userId: 102}
users.push(user1);


let user2: {
    userName: string,
    userId: number,
}
user2 = {userName: "sumu", userId: 103}
users.push(user2);
// console.log(users);


// for (const key in users) {
//     console.log(key);
// }

// for (const key in users) {
//     console.log(users[key]);
// }

for (const key in users) {
    console.log(users[key] ["userName"]);
}






// user1 = {
//     userName: "tarek",

// }

// console.log(user1);