const app = {
  keys: document.querySelector('ul'),
  display: document.querySelector('.display'),
  numberKeys: document.querySelectorAll('.number'),
  addKey: document.querySelector('.add'),
  subtractKey: document.querySelector('.subtract'),
  multiplyKey: document.querySelector('.multiply'),
  divideKey: document.querySelector('.divide'),
  backspaceKey: document.querySelector('.backspace'),
  clearKey: document.querySelector('.clear'),

  displayList: '',
  keypress: () => {
    app.keys.addEventListener('click', event => {
      app.displayList += event.target.innerText
      console.log(app.displayList)
      app.updateDisplay()
    })
  },
  updateDisplay: () => {
    app.display.innerText = app.displayList
  },
  removeLastEntry: () => {
    //remove last numer
    app.displayList = app.displayList.slice(0, -1)
    app.updateDisplay()
    return app.displayList
  },
  backspaceKeyPress: () => {
    app.backspaceKey.addEventListener('click', app.removeLastEntry)
  },
  init: () => {
    app.keypress()
    app.backspaceKeyPress()
  }
}

app.init()
