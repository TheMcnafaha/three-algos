"use strict";
//for this function, assume the expected outcome to be(start,end+1]
//while the input (from user) is (start,end)
function makeNumber(start, end) {
    if (end < 1) {
        throw Error(`you can't have a negative list of integers`);
    }
    if (end > 10000000) {
        throw Error(`end is toooo biggggggg`);
    }
    if (start > end) {
        throw Error(`start can't be bigger  than, or equal to, the end`);
    }
    // change end to an exclusive while keeping the input as (start,end) by adding one
    end++;
    //allocate the necessary memory at start to avoid gc land
    let tempArr = Array(end - start);
    for (let index = 0; index + start <= end; index++) {
        tempArr[index] = index + start;
    }
    return tempArr;
}
function setUpThreeDS() {
    return { needle: Number(numberInput.value), haystack: makeNumber(Number(startInput.value), Number(endInput.value)) };
}
function singleTurnBS(state, startIndex, endIndex) {
    if (state.needle === undefined || state.haystack === undefined) {
        throw Error(`undefined state`);
    }
    if (startIndex > endIndex) {
        return { value: false, done: true };
    }
    const middlepoint = Math.floor(startIndex + (endIndex - startIndex) / 2);
    const middleValue = state.haystack[middlepoint];
    if (state.needle === middleValue) {
        return { value: middleValue, done: true };
    }
    if (state.needle < middleValue) {
        return { value: [startIndex, middlepoint], done: false };
    }
    return { value: [startIndex + 1, endIndex], done: false };
}
function nextMessageIterator(input) {
    if (input === false) {
        return "We could not find your number :(";
    }
    if (input instanceof Array) {
        return `Is  ${input[1]} bigger or less than your number?`;
    }
    return `Is  ${input} bigger or less than your number?`;
}
/*
          \\ \\
          ) \\ \\    _p_
          )^\))\))  /  *\
           \_|| || / /^`-'
  __       -\ \\--/ /
<'  \\___/   ___. )'
     `====\ )___/\\
          //     `"
          \\    /  \
          `"

*/
//doom thingys
const BS_text = document.getElementById('BS_text');
// user inputs
const startInput = document.getElementById(`start`);
const endInput = document.getElementById(`end`);
const numberInput = document.getElementById(`number`);
// user triggers
const setupBtn = document.getElementById(`setup`);
// global vars 🤮🤮🤮
let threeAlgoArr;
//event mayhem
setupBtn === null || setupBtn === void 0 ? void 0 : setupBtn.addEventListener(`click`, () => {
    var _a;
    threeAlgoArr = setUpThreeDS();
    (_a = document.getElementById(`hidden`)) === null || _a === void 0 ? void 0 : _a.classList.remove(`hidden`);
    // check for nulls lul
    if (BS_text === null) {
        throw Error(`element doesnt exist`);
    }
    if (!threeAlgoArr.haystack) {
        throw Error(`state is not defined`);
    }
    const magic = singleTurnBS(threeAlgoArr, 0, threeAlgoArr.haystack.length);
    BS_text.innerHTML = nextMessageIterator(magic.value);
});
