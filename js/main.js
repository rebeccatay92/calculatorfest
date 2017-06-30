// DOM manipulation file
document.addEventListener('DOMContentLoaded', init)

function init () {
  var basic_calc = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {

    if (checkKeyCode(event.keyCode)) {
      // update display with number corresponding to keycode
      if (event.keyCode !== 13) { //if enter is not hit
      display.value += ' ' +  event.key //add on to the input str
      } else {
      var displayValue = display.value
      if (displayValue.indexOf('+') > -1) calculateAdd(displayValue)
      if (displayValue.indexOf('-') > -1) calculateMinus(displayValue)
      if (displayValue.indexOf('*') > -1) calculateMultiply(displayValue)
      if (displayValue.indexOf('/') > -1) calculateDivision(displayValue)
      }
    }
}
  function calculateAdd(str) {
    var splitStr = str.replace(/ /g, "").split('+')
    console.log(splitStr)
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.add(firstNum,secondNum)
    displayResult(result)
  }

  function calculateMinus(str) {
    var splitStr = str.replace(/ /g, "").split('-')
    console.log(splitStr)
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.minus(firstNum,secondNum)
    displayResult(result)
  }

  function calculateMultiply(str) {
    var splitStr = str.replace(/ /g, "").split('*')
    console.log(splitStr)
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.multiply(firstNum,secondNum)
    displayResult(result)
  }

  function calculateDivision(str) {
    var splitStr = str.replace(/ /g, "").split('/')
    console.log(splitStr)
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.division(firstNum,secondNum)
    displayResult(result)
  }

  function displayResult(str) {
    display.value = str
  }

  // if keyevent is 0-9
  // extend to operators +187, -189, *56, /191
  // enter13
  function checkKeyCode (keycode) {
    if (keycode >= 48 && keycode <= 57) return true
    if (keycode === 187 || keycode === 189) return true
    if (keycode === 56 || keycode === 191) return true
    if (keycode === 13) return true
    else return false
  }
}