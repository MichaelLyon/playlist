var pictureDivToAppend = $('.picture_container')[0];
var buttonToClickActionTEMP = $('.actionButtons')[0];
var imagePrefab = $('.topBarImages');
var httpRequest = new XMLHttpRequest();
window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
          chooseRandom(make_JSON_Object_Array(jsonNewObj),3);
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};


function updateDOM(){
  var img_Inner = $("<img></img>", {class: "topBarImages"});
  $(pictureDivToAppend).append(img_Inner);

}

$('.topBarImages').click(function(){
  alert(this.src);
})

$(buttonToClickActionTEMP).click(function(){
  updateDOM();

})
