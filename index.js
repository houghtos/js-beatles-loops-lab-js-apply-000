function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  //var len = musicians.length;
  for (var i = 0 in musicians){
    var arrayAppend = musicians[i] + "plays" + instruments[i]
      emptyArray.push(arrayAppend)
  }

  return emptyArray
}