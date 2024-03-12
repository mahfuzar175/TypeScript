var users;
users = [];
var user1;
user1 = { userName: "tarek", userId: 102 };
users.push(user1);
var user2;
user2 = { userName: "sumu", userId: 103 };
users.push(user2);
var user3;
user3 = { userName: "rabbi", userId: 104 };
users.push(user2);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
