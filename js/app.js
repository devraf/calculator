const app = {
  keys: document.querySelector('ul'),
  display: document.querySelector('.display'),
  numberKeys: document.querySelectorAll('.number'),
  operatorKeys: document.querySelectorAll('.operator'),
  equalsKey: document.querySelector('.equal'),
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
    app.runningTotal = 0
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
  buffer: () => {
    if (!app.displayText) {
      return 0
    }
    return parseInt(app.displayText)
  },
  runningTotal: 0,
  currentOperator: '',
  operationsKeyPress: () => {
    app.keys.addEventListener('click', event => {
      if (event.target.classList.contains('operator')) {
        app.currentOperator = event.target.innerText
        app.operations()
        app.displayText = ''
        app.display.innerText = ''
      }
    })
  },
  operations: () => {
    if (app.currentOperator === '') {
      app.runningTotal = app.buffer()
    } else if (app.currentOperator === '+') {
      app.runningTotal += app.buffer()
    } else if (app.currentOperator === '−') {
      app.runningTotal -= app.buffer()
    } else if (app.currentOperator === '/') {
      app.runningTotal /= app.buffer()
    } else if (app.currentOperator === '∗') {
      app.runningTotal *= app.buffer()
    } else return app.runningTotal
  },
  equals: () => {
    app.equalsKey.addEventListener('click', () => {
      app.operations()
      app.display.innerText = app.runningTotal
      app.displayText = ''
    })
  },
  init: () => {
    app.numberKeypress()
    app.backspaceKeyPress()
    app.clearKeyPress()
    app.operationsKeyPress()
    app.equals()
  }
}

app.init()
