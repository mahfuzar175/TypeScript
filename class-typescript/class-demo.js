var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: tarek, age: 24
// user2 - name: sumu, age: 23 
var user1 = new User("tarek", 24);
user1.display();
var user2 = new User("sumu", 23);
user1.display();
