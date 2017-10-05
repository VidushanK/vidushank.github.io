var width = 6089;
var height = 3648;
var formula = width / height;
var movement = 0.1;
var duration = 1;

var backgroundResize = function() {
  var doc = document.documentElement || document.body;
    var widthForBG = doc.clientHeight * 1.669133771929825;
    document.getElementById("hero")
  }

  var windowResize = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  };
  backgroundResize();
  windowResize(window, "resize", backgroundResize);
  var readjust = 0;

  setInterval(function () {
    readjust += movement;
    document.getElementById("hero").style.backgroundPosition = readjust + "px 0px"
  }, duration);
