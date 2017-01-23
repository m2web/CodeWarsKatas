
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

seqFactorial = function (args) {
    var startNum = 0;
    if(args !== undefined && args[0] > -1){
        startNum = args[0];

        if (startNum === 0 || startNum === 1) {
            return function () {
                return 1;
            }
        }

        var result = startNum;
        var firstStep = true;
        return function () {
            if(firstStep){
                //display the startNum first
                firstStep = false;
                return startNum;
            }
            while (startNum > 1) { 
                startNum--;
                return result *= startNum;
            }
        }
    }

    //start at 
    
}

generator = function(sequencer, args){
    return {
       next: sequencer(args)
    }
}

// var seq = generator(dummySeq);
// for (var i = 0; i < 3; i++) {
//     console.log(seq.next());
// }

// var seq = generator(seqIncrementByOne);
// for (var i = 0; i < 3; i++) {
//     console.log(seq.next());
// }

// seq = generator(seqIncrementByOne, [10]);
// for (var i = 0; i < 3; i++) {
//     console.log(seq.next());
// }

// seq = generator(seqStartStep, [1, 3]);
// for (var i = 0; i < 3; i++) {
//     console.log(seq.next());
// }

var seq = generator(seqFactorial, [5]);
for (var i = 0; i < 5; i++) {
    console.log(seq.next()); 
}

//from https://www.codewars.com/kata/es5-generators-i