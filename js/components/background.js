var background ="body { font: normal .80em 'trebuchet ms', arial, sans-serif; background: "+ board.prefs.backgroundColor +"; color: #000;}"

if (board.prefs.backgroundImage) {
  background ="body { font: normal .80em 'trebuchet ms', arial, sans-serif; background: #000 url('"+ board.prefs.backgroundImage +"') repeat; color: #000;}"
}

new Vue({
  el: '#background',
  data: {
    background: background
  }
})
