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
//Case 1 returns coverart
//Case 2 returns artist + title
//Case 3 returns just artist for POST request
function make_JSON_Object_Array(jsonObj,cas){
  var newArr = [];
  switch(cas){
    case 1:
      for (var i = 0; i < jsonObj.results.length; i++) {
        newArr[i] = jsonObj.results[i].cover_art;
      }
      return newArr;
    case 2:
      for (var i = 0; i < jsonObj.results.length; i++) {
        newArr[i] = jsonObj.results[i].artist +' - '+ jsonObj.results[i].title;
      }
      return newArr;
    case 3:
      for (var i = 0; i < jsonObj.results.length; i++) {
        newArr[i] = jsonObj.results[i].artist;
      }
      return newArr;
    }
}
//Case One returns array of artists
function make_Spot_Obj_Array(objArray,cas){
  var newArr = [];
  switch(cas){
    case 1:
      for (var i = 0; i < objArray.length; i++) {
        newArr[i]= objArray[i].name;
      }
      return newArr;
    case 2:
      for (var i = 0; i < objArray.length; i++) {
        if(objArray[i].images.length === 0){
          newArr[i]='';
        }else{
          newArr[i] = objArray[i].images[0].url;
        }
      }
      return newArr;
    case 3:
      for (var i = 0; i < objArray.length; i++) {
        newArr[i] = objArray[i].id;
      }
      return newArr;
    case 4:
      for (var i = 0; i < objArray.length; i++) {
        newArr[i] =objArray[i].genres[0];
      }
      return newArr;
  }
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
