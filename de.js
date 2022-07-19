

window.onload = function() {
    window.desktop = new Desktop()

    window.onkeyup = function(e) {
        desktop.handleKeyboardShortcut(e)
      }
}
