var http = require("http");

module.exports = wakeUp;

function wakeUp(time) {
    setInterval(function() {
        http.get("https://onthego-track.herokuapp.com/");
        http.get("https://onthego-track-backend.herokuapp.com/");
    }, time); 
}
