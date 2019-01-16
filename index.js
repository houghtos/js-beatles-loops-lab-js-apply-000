// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  //var len = musicians.length;
  for (i in musicians){
    var arrayAppend = musicians[i] + "plays" + instruments[i]
      emptyArray.push(arrayAppend)
  }

  return emptyArray
}