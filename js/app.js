const app = {
  keys: document.querySelector('ul'),
  display: document.querySelector('.display'),
  numberKeys: document.querySelectorAll('.number'),
  addKey: document.querySelector('.add'),
  subtractKey: document.querySelector('.subtract'),
  multiplyKey: document.querySelector('.multiply'),
  divideKey: document.querySelector('.divide'),
  decimalKey: document.querySelector('.decimal'),
  backspaceKey: document.querySelector('.backspace'),
  clearKey: document.querySelector('.clear'),

  displayNumbersList: [],
  updateDisplay: event => {
    if(app.totalIsShowing) {
      app.display.innerText = ''
    }
    app.totalIsShowing = false
    app.display.innerText += event.target.innerText
     app.displayNumbersList.push(event.target.innerText)
     console.log(app.displayNumbersList)
  },

  numberKeyPress: () => {
    app.numbersKeyList().forEach((key, index) => {
      key.addEventListener('click', app.updateDisplay)
    })
  },
  numbersKeyList: () => {
     return Array.from(app.numberKeys)
   },

   removeLastEntry: () => {
     app.displayNumbersList.pop()
     app.display.innerText = app.displayNumbersList.join('')
     console.log(`removed last item from ${app.displayNumbersList}`)
     if(app.displayNumbersList.length === 0) {
       app.display.innerText = ''
     }
   },
   backspaceKeyPress: () => {
     app.backspaceKey.addEventListener('click', app.removeLastEntry)
   },
   clearAll: () => {
     app.displayNumbersList = []
     app.display.innerText = ''
     app.total = 0
   },
   clearKeyPress: () => {
     app.clearKey.addEventListener('click', app.clearAll)
   },
   addKeyPress: () => {
       app.addKey.addEventListener('click', app.add)
   },
   total: 0,
   add: () => {
     if(app.display.innerText) {
     let input = app.stringToNumber(app.displayNumbersList.join(''))
     console.log(input)
     app.total += input
     console.log(app.total)
     app.totalIsShowing = true
     app.displayTotal()
   }
   },
   subtractKeyPress: () => {
     app.subtractKey.addEventListener('click', app.subtract)
   },
   firstInput: true,
   subtract: () => {
     if(app.display.innerText) {
     let input
     input = app.stringToNumber(app.displayNumbersList.join(''))
     console.log(input)
     //if total does not have number total = input else total -= input
     if(app.firstInput) {
       app.total = input
     } else {
       app.total -= input
     }
     console.log(app.total)
     app.firstInput = false
     app.totalIsShowing = true
     app.displayTotal()
   }
   },
   totalIsShowing: false,
   displayTotal: () => {
     if (app.totalIsShowing) {
       app.display.innerText = app.total
     }
     app.displayNumbersList = []

   },
   falseKeyPress: () =>{
     if(app.display.innerText = NaN) {
       app.display.innerText = ''
     }
     
   },
   // test: () => {
   //   let input1 input2
   //   if ()
   //
   // },
   //isFloat will be true if the decimal key has been clicked otherwise it will be false
   isFloat: false,
   //this shoud run when the user clicks an operation
   stringToNumber: (string) => {
     if(app.isFloat) {
       return parseFloat(string)
     } else return parseInt(string)
   },
   init:() => {
     app.numberKeyPress()
     app.backspaceKeyPress()
     app.clearKeyPress()
     app.addKeyPress()
     app.subtractKeyPress()
   }

}

app.init()
