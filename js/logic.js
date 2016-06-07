//Chooses and creates an array of random numbers.
//numberToIterate === length of array to create.
function chooseRandom(objArr,numberToIterate){
  newArr1 = [];
  for (var i = 0; i < numberToIterate; i++) {
    newArr1[i] = (objArr.splice([Math.floor(Math.random()*objArr.length)],1));
  }
  return newArr1;
}

//Makes Json object an array of objects by artist.
function make_JSON_Object_Array (jsonObj){
  var newArr = [];
  for (var i = 0; i < jsonObj.results.length; i++) {
    newArr[i] = jsonObj.results[i].cover_art;
  }
  return newArr;
}

//Taking the array of arrays [[array1][array2]] into an array of just
// the specified objective.
function make_Array_arrayOfArtists(arrayOfArrays){
  var newArr = [];
  for (var i = 0; i < arrayOfArrays.length; i++) {
    newArr[i] = arrayOfArrays[i][0];
  }
  return newArr;
}
