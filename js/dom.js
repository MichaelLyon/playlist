var httpRequest = new XMLHttpRequest();
var holderArray = [];
var globalJSONHolder = [];
var pictureGet = document.getElementsByClassName('pics');

window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
        globalJSONHolder = chooseRandom(make_JSON_Object_Array(jsonNewObj),3);
        globalJSONHolder = make_Array_arrayOfArtists(globalJSONHolder);
        updateDOM(globalJSONHolder);
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updateDOM(arrayOfArtists){
  for (var i = 0; i < 3; i++) {
    pictureGet[i].src = ('images/'+arrayOfArtists[i]);
  }
}
