var pictureDivToAppend = $('.picture_container');
var buttonToClickActionTEMP = $('.actionButtons')[0];
var boxToAppendTo = $('.actualBox')[0];
var imagePrefab = $('.topBarImages');
var clearButton = $('.actionButtons')[0];
var submitButton = $('.actionButtons')[1];
var userInputGET = $('.userInput')[0];
var iframeGet =$('.iframe')[0];
var httpRequest = new XMLHttpRequest();
var imageHolder = [];
var idHolder =[];
var globalCoverArtArrayHolder;
var globalArtistArrayHolder;
var globalArtistForPOST;
var selectedTracksStorage = [];
//Spotify Stuff
var clientID ='2f20a4a361dd4f7fb4d47e898a744ccb';
var clientSecrect = '84226d1e6d9a4bb1a53fcf8b422c2d34';
var spot_artists_array;
var spot_image_array;
var spot_id_array;
var spot_genre_array;

window.onLoad= pageLoad();

function pageLoad(){
  httpRequest.onreadystatechange =function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status < 400){
        var jsonNewObj=JSON.parse(httpRequest.responseText);
        $(document).on('click', '.topBarImages', function(ele){
          for (var i = 0; i < imageHolder.length; i++) {
            if(this.id === imageHolder[i][0].id){
              updateBoxDiv(spot_artists_array[i]);
              storeSelectedTracks(spot_artists_array[i]);
              pushIDArray(spot_id_array[i]);
            };
          };
        })
          // globalCoverArtArrayHolder = make_JSON_Object_Array(jsonNewObj,1);
          // globalArtistArrayHolder = make_JSON_Object_Array(jsonNewObj,2);
          // globalArtistForPOST = make_JSON_Object_Array(jsonNewObj,3);
          //updatePicDom(globalCoverArtArrayHolder);
          // $(pictureDivToAppend.childNodes).click(function(ele){
          //   console.log(ele);
          //   for (var i = 0; i < imageHolder.length; i++) {
          //     if(this.id === imageHolder[i][0].id){
          //       updateBoxDiv(globalArtistArrayHolder[i]);
          //       storeSelectedTracks(globalArtistForPOST[i]);
          //     };
          //   };
          // });
          $(clearButton).click(function(){
            $(boxToAppendTo).empty('');
            selectedTracksStorage = [];
          });
          $(submitButton).click(function(){
            $(boxToAppendTo).empty('');
            $.post("https://lit-fortress-6467.herokuapp.com/post",selectedTracksStorage,function(data,status,xhr){
              // console.log(data);
            });
            $.get(('https://api.spotify.com/v1/search?q=' + userInputGET.value +'&type=artist&market=US'),function(data){
              imageHolder =[];
              idHolder=[];
               spot_artists_array = make_Spot_Obj_Array(data.artists.items,1);
               spot_image_array =make_Spot_Obj_Array(data.artists.items,2);
               spot_id_array = make_Spot_Obj_Array(data.artists.items,3);
               console.log(spot_id_array);
               spot_genre_array = make_Spot_Obj_Array(data.artists.items,4);
              updatePicDom(spot_image_array);
            });
            selectedTracksStorage =[];
            // console.log('Submitting to Server');
          });
        if(jsonNewObj.Response ==="False"){
          alert('Server Not Responding');
        };
      };
    };
  };
  httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
  httpRequest.send();
};

function updatePicDom(arr){
  $(pictureDivToAppend).html('');
  for (var i = 0; i < arr.length; i++) {
    var img_Inner = $("<img></img>", {class: "topBarImages",id:(i), src:(arr[i])});
    $(pictureDivToAppend).append(img_Inner);
    pushImageArray(img_Inner);
  };
};

function updateBoxDiv(ele){
  var newBoxDiv = $("<div></div>", {class:'artistDiv'}).text(ele);
  $(boxToAppendTo).append(newBoxDiv);
};

function pushImageArray(newImage){
  imageHolder.push(newImage);
};
function pushIDArray(newId){
  idHolder.push(newId);
  iframeGet.src = "https://embed.spotify.com/?uri=spotify:user:spotify:playlist:"+newId;
  console.log(newId);
}
function storeSelectedTracks(ele){
  selectedTracksStorage.push(ele);
};
