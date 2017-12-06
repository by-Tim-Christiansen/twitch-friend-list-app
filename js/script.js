var toAppend = "";
$(document).ready(function() {
  var names = ["aDrive", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  for (var i = 0; i < names.length; i++) {
    APIrequest(names[i]);
  }
});

function APIrequest(name) {
var request = new XMLHttpRequest();

request.open('GET', "https://api.twitch.tv/kraken/streams/" + name + "?client_id=syzby9glp3k5myd4tvro3mg5a5pruj", true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response);
    if (data.stream == null) {

    }
      toAppend += "<div class='container'> <div class='card'> <div class='card-body'> <img class='profil-pic' src='" + data.stream.channel.logo + "' alt ='channel logo'> <h4 class='card-title'>" + name + "</h4> <br /> <p class='card-text'>" + data.stream.channel.status + "</p> <a class='btn btn-live' href='" + data.stream.channel.url + "' role='button'> LIVE </a> </div> </div> </div>";
      $(".results").html(toAppend);
  }
  else {
    // We reached our target server, but it returned an error
    alert("Ndh");
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  alert("nf");
};

request.send();
}
