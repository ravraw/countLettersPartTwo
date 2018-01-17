var myArgv = process.argv.slice(2);

function countLetters(sampleString){

  var objLetterCount = {};
  var inputString = sampleString.join('');
  var splitArray = inputString.split("");
  var filteredArray = splitArray.filter(function(elem, index, self){
    return index === self.indexOf(elem);
  });

  var occuranceIndex = [];

  for (var i = 0 ; i < filteredArray.length ; i++){

    for(var j = 0 ; j < splitArray.length ; j++){

      if(filteredArray[i] === splitArray[j]){
        occuranceIndex.push(j);
      }
    }
    objLetterCount[filteredArray[i]] = occuranceIndex;
    console.log();
    occuranceIndex = [];
  }
  return objLetterCount ;
}

var results = countLetters(myArgv);
console.log(results);
