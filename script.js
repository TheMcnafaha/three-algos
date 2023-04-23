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
/* THE DOM WORLD
          ,  ,
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
});
