var pictureDivToAppend = $('.picture_container')[0];
var buttonToClickActionTEMP = $('.actionButtons')[0];
var boxToAppendTo = $('.actualBox')[0];
var imagePrefab = $('.topBarImages');
var clearButton = $('.actionButtons')[0];
var submitButton = $('.actionButtons')[1];
var httpRequest = new XMLHttpRequest();
var imageHolder = [];
var globalCoverArtArrayHolder;
var globalArtistArrayHolder;
var selectedTracksStorage = [];
window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
          globalCoverArtArrayHolder = make_JSON_Object_Array(jsonNewObj,1);
          globalArtistArrayHolder = make_JSON_Object_Array(jsonNewObj,2);
          updatePicDom(globalCoverArtArrayHolder);
          $(pictureDivToAppend.childNodes).click(function(ele){
            for (var i = 0; i < imageHolder.length; i++) {
              if(this.id === imageHolder[i][0].id){
                updateBoxDiv(globalArtistArrayHolder[i]);
                storeSelectedTracks(globalCoverArtArrayHolder[i]);
              }
            }
          })
          $(clearButton).click(function(){
            $(boxToAppendTo).empty('');
          })
          $(submitButton).click(function(){
            $(boxToAppendTo).empty('');
            console.log('Submitting to Server');
          })
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updatePicDom(arr){
  for (var i = 0; i < arr.length; i++) {
    var img_Inner = $("<img></img>", {class: "topBarImages",id:(i), src:('images/'+arr[i])});
    $(pictureDivToAppend).append(img_Inner);
    pushImageArray(img_Inner);
  }
}

function updateBoxDiv(ele){
  var newBoxDiv = $("<div></div>", {class:'artistDiv'}).text(ele);
  $(boxToAppendTo).append(newBoxDiv);
}

function pushImageArray(newImage){
  imageHolder.push(newImage);
}

function storeSelectedTracks(ele){
  selectedTracksStorage.push(ele);
  console.log(selectedTracksStorage);
}
$(buttonToClickActionTEMP).click(function(){
})
