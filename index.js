function theBeatlesPlay(musicians, instruments) {
  var returnArray = [];
  //var len = musicians.length;
  for (var i = 0;  i < musicians.length; i++){
    var arrayAppend = musicians[i] + " plays " + instruments[i]
      returnArray.push(arrayAppend)
  }

  return returnArray
}