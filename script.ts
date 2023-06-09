// code preface
type NumberArr = Array<number>

type ThreeAlgosDS = {
  // the expected program data structure
  needle?: number,
  haystack?: NumberArr
}

//for this function, assume the expected outcome to be(start,end+1]
//while the input (from user) is (start,end)
function makeNumber(start: number, end: number): NumberArr {
  if (end < 1) { throw Error(`you can't have a negative list of integers`) }
  if (end > 10000000) { throw Error(`end is toooo biggggggg`) }
  if (start > end) { throw Error(`start can't be bigger  than, or equal to, the end`) }
  // change end to an exclusive while keeping the input as (start,end) by adding one
  end++
  //allocate the necessary memory at start to avoid gc land
  let tempArr = Array(end - start)
  for (let index = 0; index + start <= end; index++) {
    tempArr[index] = index + start
  }
  return tempArr
}

function setUpThreeDS(): ThreeAlgosDS {
  return { needle: Number(numberInput.value), haystack: makeNumber(Number(startInput.value), Number(endInput.value)) }

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
const startInput = document.getElementById(`start`) as HTMLInputElement
const endInput = document.getElementById(`end`) as HTMLInputElement
const numberInput = document.getElementById(`number`) as HTMLInputElement

// user triggers
const setupBtn = document.getElementById(`setup`) as HTMLInputElement

// global vars 🤮🤮🤮
let threeAlgoArr: ThreeAlgosDS


//event mayhem

setupBtn?.addEventListener(`click`, () => {
  threeAlgoArr = setUpThreeDS()
  document.getElementById(`hidden`)?.classList.remove(`hidden`)
})


