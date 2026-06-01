var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function Drum(audioSource) {
  this.audio = new Audio(audioSource);
  this.play = function () {
    this.audio.play();
  };
}

function makeSound(key) {
  switch (key) {
    case "w":
      var w = new Drum("./sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var a = new Drum("./sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var s = new Drum("./sounds/tom-3.mp3");
      s.play();
      break;
    case "d":
      var d = new Drum("./sounds/tom-4.mp3");
      d.play();
      break;
    case "j":
      var j = new Drum("./sounds/snare.mp3");
      j.play();
      break;
    case "k":
      var k = new Drum("./sounds/crash.mp3");
      k.play();
      break;
    case "l":
      var l = new Drum("./sounds/kick-bass.mp3");
      l.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
