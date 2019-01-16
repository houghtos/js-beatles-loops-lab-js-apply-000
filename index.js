//Function 1 Beatles for loop
function theBeatlesPlay(musicians, instruments) {
  var returnArray = [];
  for (var i = 0;  i < musicians.length; i++){
    var arrayAppend = musicians[i] + " plays " + instruments[i]
      returnArray.push(arrayAppend)
  }

  return returnArray
}

//Function 2 John Lennon Facts while loop 
function johnLennonFacts(facts){
  var n = 0;
  var len = facts.length;
  var returnFacts = [];
  while (n < len) {
    var tempVar = facts[n];
    tempVar = tempVar + "!!!";
    returnFacts.push(tempVar)
    n++;
  }
  return returnFacts
}

//Function 3 love Beatles do-while loop
function iLoveTheBeatles(inputNumber){
  var returnArray = [];
  var delta = 15 - inputNumber;
  
  if (inputNumber < 15){
    do{
      
    }
  }
}