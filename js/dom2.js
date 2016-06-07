var getImages = document.getElementsByClassName('topBarImages');
var httpRequest = new XMLHttpRequest();
var contentBoxDiv = document.getElementsByClassName('actualBox')[0];
var imageClick = [];
var savedImageClick =[];
for (var i = 0; i < 5; i++) {
  imageClick[i]=document.getElementsByClassName('topBarImages')[i];
}
window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
          updateDom(randomizePicsTopBar(jsonNewObj));
          // clickManager(randomizePicsTopBar(jsonNewObj));
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updateDom(arr){
  for (var i = 0; i < arr.length; i++) {
    getImages[i].src = 'images/'+arr[i];
  }
}

function clickManager(itemClicked){
  savedImageClick.push(itemClicked);
  var newDiv = document.createElement('div');
  newDiv.innerHTML= itemClicked;
  contentBoxDiv.appendChild(newDiv);
}

for (var i = 0; i < imageClick.length; i++) {
  imageClick[i].addEventListener('click',function(){
    clickManager();
  })
}
