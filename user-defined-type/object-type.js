// let users: object[];
// users = [{userName: "tarek"}, {userName: "rafi"}];
var users;
users = [];
var user1;
user1 = { userName: "tarek", userId: 102 };
users.push(user1);
var user2;
user2 = { userName: "sumu", userId: 103 };
users.push(user2);
// console.log(users);
// for (const key in users) {
//     console.log(key);
// }
// for (const key in users) {
//     console.log(users[key]);
// }
for (var key in users) {
    console.log(users[key]["userName"]);
}
// user1 = {
//     userName: "tarek",
// }
// console.log(user1);
