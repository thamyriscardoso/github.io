if ( navigator.geolocation ){
    navigator.geolocation.getCurrentPosition(function( posicao ){
      latitude= posicao.coords.latitude;
      longitude=posicao.coords.longitude;
      var resposta=document.getElementById('resposta');
      resposta.innerHTML= "Latitude é:" +latitude+ "<br/>Longitude é:" +longitude;
    });
 }
