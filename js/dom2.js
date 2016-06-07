var pictureDivToAppend = $('.picture_container')[0];
var buttonToClickActionTEMP = $('.actionButtons')[0];
var boxToAppendTo = $('.actualBox')[0];
var imagePrefab = $('.topBarImages');
var httpRequest = new XMLHttpRequest();
var imageHolder = [];
var globalArrayHolder;
window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
          globalArrayHolder = make_JSON_Object_Array(jsonNewObj);
          updateDOM(globalArrayHolder);
          $(pictureDivToAppend.childNodes).click(function(ele){
            for (var i = 0; i < imageHolder.length; i++) {
              if(this.id === imageHolder[i][0].id){
                updateBoxDiv(globalArrayHolder[i]);
              }
            }
          })
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updateDOM(arr){
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

$(buttonToClickActionTEMP).click(function(){
})
