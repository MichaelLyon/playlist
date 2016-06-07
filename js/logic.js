function randomizePics(jsonObj){
  var newArr= [];
  for (var i = 0; i < jsonObj.results.length; i++) {
    newArr[i]= jsonObj.results[i].cover_art;
  }
  return chooseRandom(newArr);
};

function chooseRandom(arr){
  // // create random number from 0 to length of array
  // var random = Math.floor(Math.random()*arr.length)
  // return arr[4]
  newArr1 = [];
  for (var i = 0; i < 3; i++) {
    newArr1[i] = (arr.splice([Math.floor(Math.random()*arr.length)],1));
  }
  return newArr1;
}

function randomizePicsTopBar(jsonObj){
  var newArr= [];
  for (var i = 0; i < jsonObj.results.length; i++) {
    newArr[i]= jsonObj.results[i].cover_art;
  }
  return newArr;
};
