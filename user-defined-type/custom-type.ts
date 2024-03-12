
type User =  {
    userName: string,
    userId: number,
}

let users: User[];
users = [];

let user1: User;
user1 = {userName: "tarek", userId: 102}
users.push(user1);

let user2: User;
user2 = {userName: "sumu", userId: 103}
users.push(user2);

let user3: {
    userName: string,
    userId: number,
}
user3 = {userName: "rabbi", userId: 104}
users.push(user2);
// console.log(users);


type RequestType = "GET" | "POST";
let getRequest: RequestType;

getRequest = "GET";

function requestHandler (requestType: RequestType){
    console.log(requestType);
}
requestHandler("GET")



