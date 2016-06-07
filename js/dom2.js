var pictureDivToAppend = $('.picture_container')[0];
var buttonToClickActionTEMP = $('.actionButtons')[0];
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
    var img_Inner = $("<img></img>", {class: "topBarImages", src:('images/'+arr[i])});
    $(pictureDivToAppend).append(img_Inner);
    pushImageArray(img_Inner);
  }

}

function pushImageArray(newImage){
  imageHolder.push(newImage);
}

$('.topBarImages').click(function(ele){

})

$(buttonToClickActionTEMP).click(function(){
})
