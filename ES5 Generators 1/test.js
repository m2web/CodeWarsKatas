
// dummySeq = function () {
//   return function () {
//     return "dummy";
//   };
// }

seqIncrementByOne = function (args){
    var index = 0;
    if(args !== undefined && args[0] > -1){
        index = args[0];
    }

    return function () {
        return index++;
    }
}

seqStartStep = function (args){
    var startNum = 0;
    var stepNum = 1;

    if(args !== undefined && args[0] > -1){
        startNum = args[0];
    }

    if(args !== undefined && args[1] > 0){
        stepNum = args[1];
    }
    var firstStep = true;
    return function () {
        if(firstStep){
            //display the startNum first
            firstStep = false;
            return startNum;
        }
        return startNum += stepNum;
    }
}

generator = function(sequencer, args){
    return {
       next: sequencer(args)
    }
}

// var seq = generator(dummySeq);
// console.log(seq.next()); // 'dummy'
// console.log(seq.next()); // 'dummy'
// console.log(seq.next()); // 'dummy'

var seq = generator(seqIncrementByOne);
console.log(seq.next()); // 0
console.log(seq.next()); // 1
console.log(seq.next()); // 2

seq = generator(seqIncrementByOne, [10]);
console.log(seq.next()); // 10
console.log(seq.next()); // 11
console.log(seq.next()); // 12

seq = generator(seqStartStep, [1, 3]);
console.log(seq.next()); // 1
console.log(seq.next()); // 4
console.log(seq.next()); // 7

//from https://www.codewars.com/kata/es5-generators-i