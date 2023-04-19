console.log("hello world");
//for this function, assume the expected outcome to be(start,end+1]
//while the input (from user) is (start,end)
function makeNumber(start, end) {
    if (end < 1) {
        throw Error("you can't have a negative list of integers");
    }
    if (end > 10000000) {
        throw Error("end is toooo biggggggg");
    }
    if (start > end) {
        throw Error("start can't be bigger  than, or equal to, the end");
    }
    // change end to an exclusive while keeping the input as (start,end) by adding one
    end++;
    //allocate the necessary memory at start to avoid gc land
    var tempArr = Array(end - start);
    for (var index = 0; index + start <= end; index++) {
        tempArr[index] = index + start;
    }
    return tempArr;
}
