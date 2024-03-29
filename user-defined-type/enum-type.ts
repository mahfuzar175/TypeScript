// enum -store contains; duplicate value is not allowed here
// enum, types: numeric, string, hetergenous


// numeric enum
enum RequestType{
    readData = 1,
    saveData = 3,
    deleteData,
}

// console.log(RequestType);
// console.log(RequestType.saveData);
// console.log(RequestType[4]);
// console.log(RequestType["readData"]);


// string enum
enum RequestType2{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
}
// console.log(RequestType2.deleteData);



// hetergenous enum
enum RequestType3{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA",
    id = 101
}