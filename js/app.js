const app = {
  keys: document.querySelector('ul'),
  display: document.querySelector('.display'),
  numberKeys: document.querySelectorAll('.number'),
  operatorKeys: document.querySelectorAll('.operator'),
  addKey: document.querySelector('.add'),
  subtractKey: document.querySelector('.subtract'),
  multiplyKey: document.querySelector('.multiply'),
  divideKey: document.querySelector('.divide'),
  backspaceKey: document.querySelector('.backspace'),
  clearKey: document.querySelector('.clear'),

  displayText: '',
  numberKeypress: () => {
    app.keys.addEventListener('click', event => {
      if (event.target.classList.contains('number')) {
        app.displayText += event.target.innerText
        app.updateDisplay()
      }
    })
  },
  updateDisplay: () => {
    app.display.innerText = app.displayText
  },
  clearDisplay: () => {
    app.display.innerText = ''
    app.displayText = ''
    app.runningTotal = ''
  },
  removeLastEntry: () => {
    //remove last numer
    app.displayText = app.displayText.slice(0, -1)
    app.updateDisplay()
    return app.displayText
  },
  backspaceKeyPress: () => {
    app.backspaceKey.addEventListener('click', app.removeLastEntry)
  },
  clearKeyPress: () => {
    app.clearKey.addEventListener('click', app.clearDisplay)
  },
  operations: () => {
    let buffer = parseInt(app.displayText)
    switch (app.operatorKeys.innerText) {
      case '+':
        console.log(buffer)
        // buffer += buffer
        // app.displayText = ''
        break
    }
    return buffer
  },
  runningTotal: '',
  operationsKeyPress: () => {
    app.keys.addEventListener('click', event => {
      let buffer = parseInt(app.displayText)
      // switch (event.target.innerText) {
      //   case '+':
      //     if (!app.runningTotal) {
      //       app.runningTotal = buffer
      //     } else app.runningTotal += buffer
      //     app.displayText = ''
      //     app.display.innerText = ''
      //     app.display.innerText = app.runningTotal
      //     console.log(app.runningTotal)
      //     break
      // }
    })
  },
  init: () => {
    app.numberKeypress()
    app.backspaceKeyPress()
    app.clearKeyPress()
    app.operationsKeyPress()
  }
}

app.init()
