console.log("hello world");
function makeNumber(end) {
    if (end < 1) {
        throw Error("you can't have a negative list of integers");
    }
    if (end > 10000000) {
        throw Error("end is toooo biggggggg");
    }
    //allocate the necessary memory once
    var tempArr = new Array(end);
    for (var index = 0; index < tempArr.length; index++) {
        tempArr[index] = index;
    }
    return tempArr;
}
makeNumber(10000000);
console.log("over");
