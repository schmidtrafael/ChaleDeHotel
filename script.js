function relogio(){
    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);


var mapApiKey = "AqEwY9YkYDynJdqDyZav0sMpzw0sFydkiPiOZ2HKlUyiBaPkNRBaOqZVmjXckGiQ";
                                        
function initMap(){
    'use strict';

    var map = new Microsoft.Maps.Map("#hplus-map", {
        credentials: 'Your Bing Maps Key',
        center: new Microsoft.Maps.Location(51.50632, -0.12714),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 10
    });

}