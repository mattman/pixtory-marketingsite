$.backstretch("img/header-1.png");

function getContent(){
	moment = getParameterByName('moment');
	alert(moment);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var loadMoment = function(momentID, callback) {
 var url = "http://pixtory.herokuapp.com/moments/" + momentID + "?callback=?";
 $.getJSON(url).success(function(data) {
   callback(data.moment);
 });
};