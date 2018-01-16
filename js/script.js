$(document).ready(function() {
  var toAppend = "";
  var names = ["aDrive", "ESL_SC2", "OgamingSC2", "cretetion", "sephironlp", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "mckyTV", "ungespielt"];

  function callIfOffline(name){
    var request2 = new XMLHttpRequest();
    request2.open('GET', "https://api.twitch.tv/kraken/channels/" + name + "?client_id=syzby9glp3k5myd4tvro3mg5a5pruj", true);
    request2.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var data2 = JSON.parse(this.response);
        toAppend += "<div class='container'> <div class='card'> <div class='card-body'> <img class='profil-pic' src='" + data2.logo + "' alt ='channel logo'> <h4 class='card-title'>" + name + "</h4> <br /> <p class='card-text'>" + data2.status + "</p> <a class='btn btn-off' href='" + data2.url + "' target='_blank' role='button'> OFFLINE </a> </div> </div> </div>";
        $(".results").html(toAppend);
      }
      else {
        alert("Oops! Something went wrong, please try again.");
      }
    };
    request2.onerror = function() {
      alert("Oops! Something went wrong, please try again.");
    };
    request2.send();
  }

  function APIrequest(name) {
    var request = new XMLHttpRequest();
    request.open('GET', "https://api.twitch.tv/kraken/streams/" + name + "?client_id=syzby9glp3k5myd4tvro3mg5a5pruj", true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        if (data.stream !== null) {
          toAppend += "<div class='container'> <div class='card'> <div class='card-body'> <img class='profil-pic' src='" + data.stream.channel.logo + "' alt ='channel logo'> <h4 class='card-title'>" + name + "</h4> <br /> <p class='card-text'>" + data.stream.channel.status + "</p> <a class='btn btn-live' href='" + data.stream.channel.url + "' target='_blank' role='button'> LIVE </a> </div> </div> </div>";
          $(".results").html(toAppend);
        }
        else {
          callIfOffline(name);
        }
      }
      else {
        alert("Ndh");
      }
    };
    request.onerror = function() {
      alert("nf");
    };
    request.send();
  }
  for (var i = 0; i < names.length; i++) {
    APIrequest(names[i]);
  }
  if ($(".filter").click(function() {
    $.fn.reverseChildren = function() {
      return this.each(function(){
      var $this = $(this);
      $this.children().each(function(){ $this.prepend(this) });
      });
    };
    $(".results").reverseChildren();
      }));
});
