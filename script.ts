console.log(`hello world`)


type NumberArr=Array<number>

function makeNumber(end:number):NumberArr{
    if(end<1){throw Error(`you can't have a negative list of integers`)}
    if(end>10000000){throw Error(`end is toooo biggggggg`)}
    //allocate the necessary memory at start to avoid gc land
    let tempArr=new Array(end)
    for (let index = 0; index < tempArr.length; index++) {
      tempArr[index]=index
    }
    return tempArr

}

