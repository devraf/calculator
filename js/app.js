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
  currentOperation: '',
  keyPress: function () {
    let input
    if (event.target.classList.contains('number')) {
      return app.updateDisplay(numberKey(event))
    } else if (event.target.classList.contains('backspace')) {
      return removeLastEntry()
    } else if (event.target.classList.contains('clear')) {
      return clearAll()
    } else if (event.target.classList.contains('operator')) {
      return updateCurrentOperator(event)
    } else if (event.target.classList.contains('equal')) {
      return total()
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
        app.currentOperation = operator
        return
      } else convertToNumber(operator)

    }

    function convertToNumber(operator) {
      let newTotal = parseInt(app.runningTotal)
      if (app.displayText != '') {
        switch (operator) {
          case '+':
            console.log('running + operation')
            newTotal += parseInt(app.displayText)
            app.runningTotal = newTotal
            return app.runningTotal
          case '−':
            newTotal -= parseInt(app.displayText)
            console.log('running - operation')
            app.runningTotal = newTotal
            return app.runningTotal
          case '∗':
            console.log('running ∗ operation')
            newTotal *= parseInt(app.displayText)
            app.runningTotal = newTotal
            return app.runningTotal
          case '/':
            console.log('run / operation')
            newTotal /= parseInt(app.displayText)
            app.runningTotal = newTotal
            return app.runningTotal
        }
      }
      return
    }
    function updateDisplay() {
      //update display when equals key is pressed
    }

    function total() {
      if (app.runningTotal != '' && app.displayText != '') {
        console.log(app.runningTotal, app.displayText)
        let x = convertToNumber(app.currentOperation)
        console.log(x)
        app.displayText = ''
        console.log('clearing displayText')
      } else console.log(app.runningTotal + convertToNumber(currentOperation))
    }

    function updateCurrentOperator(event) {
      app.currentOperation = event.target.innerText
      console.log('new operator', app.currentOperation)
      return updateRunningTotal(app.currentOperation)
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