const app = {
  keys: document.querySelector('ul'),
  display: document.querySelector('.display'),
  numberKeys: document.querySelectorAll('.number'),
  operatorKeys: document.querySelectorAll('.operator'),
  equalsKey: document.querySelector('.equal'),
  backspaceKey: document.querySelector('.backspace'),
  clearKey: document.querySelector('.clear'),
  displayText: '',
  runningTotal: '',
  keyPress: function () {
    let input
    let currentOperation
    if (event.target.classList.contains('number')) {
      return app.updateDisplay(numberKey(event))
    } else if (event.target.classList.contains('backspace')) {
      return removeLastEntry()
    } else if (event.target.classList.contains('clear')) {
      return clearAll()
    } else if (event.target.classList.contains('operator')) {
      return updateCurrentOperater(event)
    } 

    function numberKey(event) {
      input = event.target.innerText
      return input
    }

    function removeLastEntry() {
      app.displayText = app.displayText.slice(0, -1)
      console.log(app.displayText)
      return app.displayText
    }

    function clearAll() {
      app.displayText = ''
      app.runningTotal = ''
      console.log(app.displayText)
      return app.displayText
    }

    function updateRunningTotal(operator) {
      if (app.runningTotal === '') {
        app.runningTotal = app.displayText
        app.displayText = ''
        console.log('running total is ', app.runningTotal)
      }
      // switch (operator) {
      //   case '+':
      //     console.log('running + operation')
      //     break;
      //   case '−':
      //     console.log('run - operation')
      //     break;
      //   case '∗':
      //     console.log('run ∗ operation')
      //     break;
      //   case '/':
      //     console.log('run / operation')
      //     break;
      // }

    }

    function updateCurrentOperater(event) {
      currentOperation = event.target.innerText
      return updateRunningTotal(currentOperation)
    }

  },
  updateDisplay: function (data) {
    this.displayText += data
    console.log(this.displayText)
  },
  keyPressEvent: function () {
    this.keys.addEventListener('click', this.keyPress)
  }
}

app.keyPressEvent()