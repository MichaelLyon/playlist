var userClick = document.getElementsByClassName('trackButton')[0];
var httpRequest = new XMLHttpRequest();
var topPictureGet = document.getElementById('topPicture');
var imageGet = document.getElementsByClassName('pics');
var imageArr = ['ghost_in_the_machine.jpg','thriller.jpg','red.jpg','21.jpg','the_division_bell'];

window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
          updateDOM(randomizePics(jsonNewObj));
          
        if(jsonNewObj.Response ==="False"){
        }
      }
    }
  }
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updateDOM(arrOfArrays){
  for (var i = 0; i < arrOfArrays.length; i++) {
    imageGet[i].src = 'images/'+arrOfArrays[i];
    updateImage();
  }
}

function updateImage(){
  for (var i = 0; i < imageGet.length; i++) {
    imageGet[i].style.width = '100%';
    imageGet[i].style.height = '100%';
  }
}
