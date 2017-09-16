var body = document.getElementsByTagName('body')[0];

body.style.background = board.prefs.backgroundTopColor

if (board.prefs.backgroundImage) {
  body.style.backgroundImage = "url("+ board.prefs.backgroundImage +")"
}