// enum -store contains; duplicate value is not allowed here
// enum, types: numeric, string, hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.saveData);
// console.log(RequestType[4]);
// console.log(RequestType["readData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.deleteData);
// hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
